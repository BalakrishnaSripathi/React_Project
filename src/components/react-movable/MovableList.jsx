import { List, arrayMove } from "react-movable";
import { useState } from "react";

export default function MovableList() {
  const [items, setItems] = useState([
    "HTML",
    "CSS",
    "JavaScript",
    "React",
  ]);

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-xl font-bold mb-4">Course Topics</h2>

      <List
        values={items}
        onChange={({ oldIndex, newIndex }) =>
          setItems(arrayMove(items, oldIndex, newIndex))
        }
        renderList={({ children, props }) => (
          <ul {...props} className="space-y-2">
            {children}
          </ul>
        )}
        renderItem={({ value, props, isDragged }) => (
          <li
            {...props}
            className={`p-3 bg-white shadow rounded cursor-move border 
            ${isDragged ? "bg-blue-100" : ""}`}
          >
            {value}
          </li>
        )}
      />
    </div>
  );
}