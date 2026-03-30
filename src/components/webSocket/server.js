import WebSocket, { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

let items = [];

wss.on("connection", (ws) => {
  console.log("Client connected");

  ws.on("message", (message) => {
    const { type, data, id } = JSON.parse(message);

    switch (type) {
      case "CREATE":
        const newItem = { id: Date.now(), ...data };
        items.push(newItem);
        broadcast({ type: "CREATED", data: newItem });
        break;

      case "READ":
        ws.send(JSON.stringify({ type: "READ_ALL", data: items }));
        break;

      case "UPDATE":
        items = items.map((item) =>
          item.id === data.id ? { ...item, ...data } : item
        );
        broadcast({ type: "UPDATED", data });
        break;

      case "DELETE":
        items = items.filter((item) => item.id !== id);
        broadcast({ type: "DELETED", id });
        break;
    }
  });
});

function broadcast(message) {
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(message));
    }
  });
}

console.log("Server running at ws://localhost:8080");