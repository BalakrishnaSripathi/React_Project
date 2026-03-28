import useSWR from "swr";
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";
import API, { fetchTodos } from "../services/todoService";

export default function TodoList() {
  const { data = [], isLoading, error, mutate } = useSWR(API, fetchTodos);

  if (isLoading)
    return <p className="text-center mt-10">Loading...</p>;

  if (error)
    return <p className="text-center mt-10 text-red-500">Error...</p>;

  return (
    <div className="w-full max-w-md space-y-4">
      
      <AddTodo data={data} mutate={mutate} />

      {data.slice(0, 10).map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          data={data}
          mutate={mutate}
        />
      ))}
    </div>
  );
}