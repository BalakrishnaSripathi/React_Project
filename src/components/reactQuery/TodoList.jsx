import UseTodos from "./UseTodos"

function TodoList() {

  const { data, isLoading, error } = UseTodos();

  if (isLoading) return <p className="text-center text-lg mt-10">Loading...</p>

  if (error) return <p className="text-center text-red-500 mt-10">Error loading todos</p>

  return (
    <div className="flex justify-center mt-10">
      <table className="table-auto border border-gray-300 shadow-lg rounded-lg overflow-hidden">
        
        <caption className="caption-top text-xl font-semibold mb-4">
          Todo List
        </caption>

        <thead className="bg-gray-200">
          <tr>
            <th className="px-6 py-3 border">ID</th>
            <th className="px-6 py-3 border">Title</th>
            <th className="px-6 py-3 border">Completed</th>
          </tr>
        </thead>

        <tbody>
          {data.map((todo) => (
            <tr key={todo.id} className="hover:bg-gray-100">
              <td className="px-6 py-2 border text-center">{todo.id}</td>
              <td className="px-6 py-2 border">{todo.title}</td>
              <td className="px-6 py-2 border text-center">
                {todo.completed ? (
                  <span className="text-green-600 font-semibold">Yes</span>
                ) : (
                  <span className="text-red-500 font-semibold">No</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  )
}

export default TodoList