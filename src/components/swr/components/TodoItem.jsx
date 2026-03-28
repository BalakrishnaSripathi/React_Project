import { updateTodoAPI, deleteTodoAPI } from "../services/todoService";

export default function TodoItem({ todo, data, mutate }) {

  const toggleTodo = async () => {
    const updated = data.map((t) =>
      t.id === todo.id ? { ...t, completed: !t.completed } : t
    );

    mutate(updated, false);

    await updateTodoAPI(todo.id, {
      completed: !todo.completed,
    });

  //  mutate();
  };

  const deleteTodo = async () => {
    const filtered = data.filter((t) => t.id !== todo.id);

    mutate(filtered, false);

    await deleteTodoAPI(todo.id);

    // mutate();
  };

  return (
    <div className="flex justify-between items-center bg-white p-3 rounded-lg shadow">
      
      <span
        onClick={toggleTodo}
        className={`cursor-pointer ${
          todo.completed ? "line-through text-gray-400" : ""
        }`}
      >
        {todo.title}
      </span>

      <button
        onClick={deleteTodo}
        className=" btn btn-danger text-red-500 hover:text-red-700"
      >
    Delete
      </button>
    </div>
  );
}