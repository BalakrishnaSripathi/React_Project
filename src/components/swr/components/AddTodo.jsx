import { createTodoAPI } from "../services/todoService";

export default function AddTodo({ data, mutate }) {

  const handleAdd = async () => {
    const newTodo = {
      id: Date.now(),
      title: "New Task",
      completed: false,
    };

    // Optimistic UI
    mutate([newTodo, ...data], false);

    await createTodoAPI(newTodo);

   // mutate(); // revalidate
  };

  return (
    <button
      onClick={handleAdd}
      className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
    >
      + Add Todo
    </button>
  );
}