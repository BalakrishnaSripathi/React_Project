import { useState, useMemo } from "react";
import _ from "lodash";

export default function SearchComponent() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  // 🔥 Debounced API call
  const fetchResults = async (searchText) => {
    if (!searchText) return setResults([]);

    const res = await fetch(
      `https://jsonplaceholder.typicode.com/users?q=${searchText}`
    );
    const data = await res.json();
    setResults(data);
  };

  // 👉 debounce using lodash
  const debouncedSearch = useMemo(
    () => _.debounce(fetchResults, 500),
    []
  );

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    debouncedSearch(value);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Lodash Debounce Search</h2>

      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search users..."
        style={{ padding: "8px", width: "250px" }}
      />

      <ul>
        {results.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
                                         }
