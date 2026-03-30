import { useEffect, useState } from "react";

function FrontedApp() {
  const [socket, setSocket] = useState(null);
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");

    ws.onopen = () => {
      console.log("Connected to server");
      ws.send(JSON.stringify({ type: "READ" }));
    };

    ws.onmessage = (event) => {
      const res = JSON.parse(event.data);

      switch (res.type) {
        case "READ_ALL":
          setItems(res.data);
          break;

        case "CREATED":
          setItems((prev) => [...prev, res.data]);
          break;

        case "UPDATED":
          setItems((prev) =>
            prev.map((item) =>
              item.id === res.data.id ? res.data : item
            )
          );
          break;

        case "DELETED":
          setItems((prev) =>
            prev.filter((item) => item.id !== res.id)
          );
          break;
      }
    };

    setSocket(ws);

    return () => ws.close();
  }, []);

  // ➕ CREATE
  const addItem = () => {
    if (!input) return;

    socket.send(
      JSON.stringify({
        type: "CREATE",
        data: { name: input },
      })
    );

    setInput("");
  };

  // ✏️ UPDATE
  const updateItem = (id) => {
    const newName = prompt("Enter new name:");
    if (!newName) return;

    socket.send(
      JSON.stringify({
        type: "UPDATE",
        data: { id, name: newName },
      })
    );
  };

  // ❌ DELETE
  const deleteItem = (id) => {
    socket.send(
      JSON.stringify({
        type: "DELETE",
        id,
      })
    );
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>WebSocket CRUD Operations</h2>

      <input
        value={input} className="border-2"
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter item"
      />
      <button className="m-2 btn btn-outline-success w-1/6 h-8" onClick={addItem}>Add</button>

     
        {items.map((item) => (
          <li  className="mt-3 flex" key={item.id}>
            <div className="me-2 border-2 p-1 rounded-2 w-1/6">{item.name}</div>
            <button className="btn btn-outline-primary" onClick={() => updateItem(item.id)}>Edit</button>
            <button className="btn btn-outline-danger" onClick={() => deleteItem(item.id)}>Delete</button>
          </li>
        ))}
    </div>
  );
}

export default FrontedApp;