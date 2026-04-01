import { useState, useRef, useCallback } from "react";

export interface Player {
  id: string;
  x: number;
  y: number;
  z: number;
  yaw: number;
}

const SERVER_URL = "wss://space-jwbe7w.fly.dev";

export function useMultiplayer() {
  const [players, setPlayers] = useState<Map<string, Player>>(new Map());
  const [localPlayer, setLocalPlayer] = useState<Player | null>(null);
  const wsRef = useRef<WebSocket | null>(null);
  const idRef = useRef<string>(Math.random().toString(36).slice(2, 10));
  const playersRef = useRef<Map<string, Player>>(new Map());

  const connect = useCallback(() => {
    if (wsRef.current?.readyState === WebSocket.OPEN) return;

    const id = idRef.current;
    const ws = new WebSocket(`${SERVER_URL}`);
    wsRef.current = ws;

    ws.onopen = () => {
      ws.send(JSON.stringify({ type: "join", id }));
      setLocalPlayer({ id, x: 0, y: 1.7, z: 5, yaw: 0 });
    };

    ws.onmessage = (event) => {
      const msg = JSON.parse(event.data);

      if (msg.type === "state") {
        const newPlayers = new Map<string, Player>();
        Object.values(msg.players).forEach((p: any) => newPlayers.set(p.id, p));
        playersRef.current = newPlayers;
        setPlayers(newPlayers);
      }

      if (msg.type === "player_joined") {
        const updated = new Map(playersRef.current);
        updated.set(msg.player.id, msg.player);
        playersRef.current = updated;
        setPlayers(updated);
      }

      if (msg.type === "player_moved") {
        const updated = new Map(playersRef.current);
        const p = updated.get(msg.id);
        if (p) {
          p.x = msg.x;
          p.y = msg.y;
          p.z = msg.z;
          p.yaw = msg.yaw;
        }
        setPlayers(new Map(updated));
      }

      if (msg.type === "player_left") {
        const updated = new Map(playersRef.current);
        updated.delete(msg.id);
        playersRef.current = updated;
        setPlayers(updated);
      }
    };

    ws.onclose = () => {
      setTimeout(connect, 2000);
    };
  }, []);

  const sendPosition = useCallback((x: number, y: number, z: number, yaw: number) => {
    const ws = wsRef.current;
    if (ws?.readyState === WebSocket.OPEN) {
      ws.send(JSON.stringify({ type: "move", id: idRef.current, x, y, z, yaw }));
    }
  }, []);

  return { players, localPlayer, connect, sendPosition };
}
