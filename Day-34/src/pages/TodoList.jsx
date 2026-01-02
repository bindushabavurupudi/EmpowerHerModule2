import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTodos } from "../api/todoService";

function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos()
      .then((response) => {
        setTodos(response.data.slice(0, 10)); // optional limit
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h2>Todo List</h2>

      {todos.map((todo) => (
        <div key={todo.id} style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
          <p><strong>Title:</strong> {todo.title}</p>
          <p>
            <strong>Status:</strong>{" "}
            {todo.completed ? "Completed" : "Not Completed"}
          </p>

          <Link to={`/todo/${todo.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
