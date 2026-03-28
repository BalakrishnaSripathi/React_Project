const API = "https://jsonplaceholder.typicode.com/todos";

export const fetchTodos = (url) =>
  fetch(url).then((res) => res.json());

export const createTodoAPI = (todo) =>
  fetch(API, {
    method: "POST",
    body: JSON.stringify(todo),
    headers: { "Content-Type": "application/json" },
  });

export const updateTodoAPI = (id, data) =>
  fetch(`${API}/${id}`, {
    method: "PATCH",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  });

export const deleteTodoAPI = (id) =>
  fetch(`${API}/${id}`, {
    method: "DELETE",
  });

export default API;