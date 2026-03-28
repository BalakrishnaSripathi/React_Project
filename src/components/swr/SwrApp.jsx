import TodoList from "./components/TodoList";

export default function SwrApp() {
  return (
    <div>
      <h1>CRUD Operations with SWR.</h1>
      <p>Used SWR with optimistic updates and a service layer to build a scalable and responsive CRUD app.</p>
      <TodoList />
    </div>
  );
}