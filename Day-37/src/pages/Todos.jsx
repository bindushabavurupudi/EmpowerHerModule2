import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { createTodo, fetchTodos, updateTodo, deleteTodo } from "../services/todo.service";

const Todos = () => {
  const { user } = useAuth();
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    fetchTodos(user.uid).then(setTodos);
  }, [user]);

  const addTodo = async () => {
    await createTodo({ title, completed: false, uid: user.uid });
    setTodos(await fetchTodos(user.uid));
    setTitle("");
  };

  return (
    <div className="p-6">
      <input className="border p-2" value={title} onChange={e => setTitle(e.target.value)} />
      <button onClick={addTodo} className="ml-2 bg-black text-white px-3 py-2">Add</button>

      <ul className="mt-6">
        {todos.map(todo => (
          <li key={todo.id} className="flex justify-between mt-2">
            <span>{todo.title}</span>
            <button onClick={() => deleteTodo(todo.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
