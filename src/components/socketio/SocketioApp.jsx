import { useState } from "react";
import { socket } from "./socket";

function SocketioApp() {
  const [room, setRoom] = useState("");
  const [joined, setJoined] = useState(false);

  const joinRoom = () => {
    if (room.trim()) {
      socket.emit("join_room", room);
      setJoined(true);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Socket.IO React Chat</h1>
      {!joined ? (
        <div>
          <input
            value={room}
            onChange={(e) => setRoom(e.target.value)}
            placeholder="Enter room name"
          />
          <button onClick={joinRoom}>Join Room</button>
        </div>
      ) : (
        <Chat room={room} />
      )}
    </div>
  );
}

function Chat({ room }) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  socket.off("receive_message");
  socket.on("receive_message", (data) => {
    setMessages((prev) => [...prev, data]);
  });

  const sendMessage = () => {
    if (message.trim()) {
      const data = {
        room,
        message,
        time: new Date().toLocaleTimeString()
      };
      socket.emit("send_message", data);
      setMessage("");
    }
  };

  return (
    <div>
      <h2>Room: {room}</h2>
      <div style={{ border: "1px solid #ccc", minHeight: 200, padding: 10 }}>
        {messages.map((msg, index) => (
          <div key={index}>
            <strong>{msg.time}</strong> - {msg.message}
          </div>
        ))}
      </div>
      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type message"
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default SocketioApp;