import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

function TodoApp() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])

  function addTodo() {
    if (todo.trim() === "") return
    setTodos([...todos, { text: todo, completed: false }])
    setTodo("")
  }

  function toggleTodo(index) {
    const updatedTodos = [...todos]
    updatedTodos[index].completed = !updatedTodos[index].completed
    setTodos(updatedTodos)
  }

  return (
    <Card className="max-w-md mx-auto mt-6">
      <CardHeader>
        <CardTitle>Todo List</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex gap-2">
          <Input
            placeholder="Enter todo"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <Button onClick={addTodo}>Add</Button>
        </div>

        {todos.map((t, index) => (
          <div key={index} className="flex items-center gap-2">
            <Checkbox
              checked={t.completed}
              onCheckedChange={() => toggleTodo(index)}
            />
            <span className={t.completed ? "line-through text-gray-500" : ""}>
              {t.text}
            </span>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

export default TodoApp
