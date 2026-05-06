import { useEffect, useState } from "react";

export default function Message() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/message`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error(err));
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>Backend Message</h2>
      <p><strong>Message:</strong> {data.message}</p>
      <p><strong>Port:</strong> {data.port}</p>
    </div>
  );
}
