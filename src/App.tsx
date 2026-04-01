import { useEffect, useRef, useState, useCallback } from "react";
import * as THREE from "three";
import Peer, { DataConnection } from "peerjs";

interface Player {
  id: string;
  x: number;
  y: number;
  z: number;
  yaw: number;
  mesh?: THREE.Mesh;
  color: string;
}

function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  const peerRef = useRef<Peer | null>(null);
  const connectionsRef = useRef<DataConnection[]>([]);
  const playersRef = useRef<Map<string, Player>>(new Map());
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const posRef = useRef({ x: 0, y: 1.7, z: 0, yaw: 0 });
  const keysRef = useRef<Set<string>>(new Set());
  const playerIdRef = useRef<string>("");

  // Create world
  const createWorld = useCallback((scene: THREE.Scene) => {
    // Ground
    const groundGeo = new THREE.PlaneGeometry(200, 200, 50, 50);
    const groundMat = new THREE.MeshStandardMaterial({ color: 0x111111 });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    scene.add(ground);

    // Grid
    const grid = new THREE.GridHelper(200, 100, 0x222222, 0x181818);
    scene.add(grid);

    // Light
    const ambient = new THREE.AmbientLight(0x404040, 0.5);
    scene.add(ambient);
    const directional = new THREE.DirectionalLight(0xffffff, 0.8);
    directional.position.set(10, 20, 10);
    scene.add(directional);

    // Random pillars
    const pillarGeo = new THREE.BoxGeometry(1, 3, 1);
    for (let i = 0; i < 50; i++) {
      const mat = new THREE.MeshStandardMaterial({
        color: new THREE.Color().setHSL(Math.random() * 0.2 + 0.5, 0.3, 0.2),
      });
      const pillar = new THREE.Mesh(pillarGeo, mat);
      pillar.position.set(
        (Math.random() - 0.5) * 80,
        1.5,
        (Math.random() - 0.5) * 80
      );
      scene.add(pillar);
    }

    // Emissive markers
    const markerGeo = new THREE.SphereGeometry(0.15, 8, 8);
    for (let i = 0; i < 30; i++) {
      const mat = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        emissive: new THREE.Color().setHSL(Math.random(), 1, 0.5),
        emissiveIntensity: 2,
      });
      const marker = new THREE.Mesh(markerGeo, mat);
      marker.position.set(
        (Math.random() - 0.5) * 100,
        0.3,
        (Math.random() - 0.5) * 100
      );
      scene.add(marker);
    }
  }, []);

  // Create player mesh
  const createPlayerMesh = useCallback((color: string): THREE.Mesh => {
    const geo = new THREE.CapsuleGeometry(0.3, 0.8, 4, 8);
    const mat = new THREE.MeshStandardMaterial({
      color: color,
      emissive: color,
      emissiveIntensity: 0.3,
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.castShadow = true;
    return mesh;
  }, []);

  // Initialize Three.js scene
  const initScene = useCallback(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x050508);
    scene.fog = new THREE.Fog(0x050508, 20, 100);
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 1.7, 0);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    createWorld(scene);

    // Handle resize
    window.addEventListener("resize", () => {
      if (!cameraRef.current || !rendererRef.current) return;
      cameraRef.current.aspect = window.innerWidth / window.innerHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    });

    // Movement
    const onKeyDown = (e: KeyboardEvent) => keysRef.current.add(e.code);
    const onKeyUp = (e: KeyboardEvent) => keysRef.current.delete(e.code);
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);

    // Pointer lock
    const canvas = renderer.domElement;
    canvas.addEventListener("click", () => canvas.requestPointerLock());

    let yaw = 0;
    const onMouseMove = (e: MouseEvent) => {
      if (document.pointerLockElement === canvas) {
        yaw -= e.movementX * 0.002;
        posRef.current.yaw = yaw;
      }
    };
    document.addEventListener("mousemove", onMouseMove);

    // Animate
    let lastTime = performance.now();
    const animate = () => {
      const now = performance.now();
      const delta = (now - lastTime) / 1000;
      lastTime = now;

      const pos = posRef.current;
      const speed = 5 * delta;

      if (keysRef.current.has("KeyW") || keysRef.current.has("ArrowUp")) {
        pos.x -= Math.sin(yaw) * speed;
        pos.z -= Math.cos(yaw) * speed;
      }
      if (keysRef.current.has("KeyS") || keysRef.current.has("ArrowDown")) {
        pos.x += Math.sin(yaw) * speed;
        pos.z += Math.cos(yaw) * speed;
      }
      if (keysRef.current.has("KeyA") || keysRef.current.has("ArrowLeft")) {
        pos.x -= Math.cos(yaw) * speed;
        pos.z += Math.sin(yaw) * speed;
      }
      if (keysRef.current.has("KeyD") || keysRef.current.has("ArrowRight")) {
        pos.x += Math.cos(yaw) * speed;
        pos.z -= Math.sin(yaw) * speed;
      }

      camera.position.set(pos.x, pos.y, pos.z);
      camera.rotation.y = yaw;

      // Update other players
      const myId = playerIdRef.current;
      playersRef.current.forEach((p) => {
        if (p.id !== myId && p.mesh) {
          p.mesh.position.set(p.x, p.y, p.z);
        }
      });

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
      document.removeEventListener("mousemove", onMouseMove);
      renderer.dispose();
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, [createWorld]);

  // Multiplayer via PeerJS
  const initMultiplayer = useCallback(() => {
    const id = Math.random().toString(36).slice(2, 10);
    playerIdRef.current = id;

    const peer = new Peer(id, {
      debug: 1,
      config: {
        iceServers: [
          { urls: "stun:stun.l.google.com:19302" },
          { urls: "stun:stun1.l.google.com:19302" },
        ],
      },
    });

    peerRef.current = peer;

    peer.on("open", () => {
      const myColor = new THREE.Color().setHSL(Math.random(), 0.7, 0.5);
      const myMesh = createPlayerMesh("#" + myColor.getHexString());
      myMesh.position.set(posRef.current.x, posRef.current.y, posRef.current.z);
      sceneRef.current?.add(myMesh);

      const me: Player = { id, x: 0, y: 1.7, z: 0, yaw: 0, color: "#" + myColor.getHexString(), mesh: myMesh };
      playersRef.current.set(id, me);
    });

    peer.on("connection", (conn) => {
      connectionsRef.current.push(conn);
      conn.on("data", (data: any) => handleMessage(conn, data));
      conn.on("open", () => sendState(conn));
    });

    peer.on("error", (err) => console.error("Peer error:", err));

    // Broadcast position every 50ms
    setInterval(() => {
      const pos = posRef.current;
      const msg = { type: "move", id: playerIdRef.current, ...pos };
      connectionsRef.current.forEach((c) => {
        if (c.open) c.send(msg);
      });
    }, 50);
  }, [createPlayerMesh]);

  const handleMessage = (conn: DataConnection, data: any) => {
    if (data.type === "move") {
      let player = playersRef.current.get(data.id);
      if (!player) {
        const color = data.color || "#ff0000";
        const mesh = createPlayerMesh(color);
        sceneRef.current?.add(mesh);
        player = { ...data, mesh };
        playersRef.current.set(data.id, player);
      } else {
        Object.assign(player, data);
      }
    } else if (data.type === "state") {
      Object.entries(data.players).forEach(([pid, p]: [string, any]) => {
        if (pid !== playerIdRef.current) {
          let player = playersRef.current.get(pid);
          if (!player) {
            const mesh = createPlayerMesh(p.color || "#ff0000");
            sceneRef.current?.add(mesh);
            player = { ...p, mesh };
            playersRef.current.set(pid, player);
          } else {
            Object.assign(player, p);
          }
        }
      });
    }
  };

  const sendState = (conn: DataConnection) => {
    const state: any = { type: "state", players: {} };
    playersRef.current.forEach((p, id) => {
      if (id !== playerIdRef.current) {
        state.players[id] = { x: p.x, y: p.y, z: p.z, yaw: p.yaw, color: p.color };
      }
    });
    if (conn.open) conn.send(state);
  };

  const start = () => {
    setStarted(true);
  };

  useEffect(() => {
    if (started) {
      const cleanup = initScene();
      initMultiplayer();
      return cleanup;
    }
  }, [started, initScene, initMultiplayer]);

  if (!started) {
    return (
      <div id="enter" onClick={start}>
        <h1>3D SPACE</h1>
        <p>Click to enter · WASD to move · Mouse to look</p>
      </div>
    );
  }

  return <div ref={containerRef} />;
}

export default App;
