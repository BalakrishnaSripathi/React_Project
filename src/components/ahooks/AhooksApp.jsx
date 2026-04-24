import React, { useState } from "react";
import { useRequest, useDebounce } from "ahooks";

const fetchUsers = async (query) => {
  if (!query) return [];

  const res = await fetch(`https://api.github.com/search/users?q=${query}`);
  const data = await res.json();
  return data.items || [];
};

export default function AhooksApp() {
  const [search, setSearch] = useState("");

  // 🔹 Debounce input (wait 500ms)
  const debouncedSearch = useDebounce(search, { wait: 500 });

  // 🔹 API call using ahooks
  const { data, loading, error } = useRequest(
    () => fetchUsers(debouncedSearch),
    {
      refreshDeps: [debouncedSearch], // re-fetch when search changes
    }
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>🔍 GitHub User Search</h2>

      {/* Input */}
      <input
        type="text"
        placeholder="Search users..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: "8px", width: "300px" }}
      />

      {/* Loading */}
      {loading && <p>Loading...</p>}

      {/* Error */}
      {error && <p style={{ color: "red" }}>Something went wrong!</p>}

      {/* Results */}
      <div style={{ marginTop: "20px" }}>
        {data?.map((user) => (
          <div
            key={user.id}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
              border: "1px solid #ddd",
              padding: "10px",
            }}
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              width="40"
              style={{ borderRadius: "50%", marginRight: "10px" }}
            />
            <span>{user.login}</span>
          </div>
        ))}
      </div>
    </div>
  );
}