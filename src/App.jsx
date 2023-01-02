import "./styles.css";
import { useState } from "react";
import Appbar from "./components/Appbar";
import TodoList from "./components/TodoList";
import CreateTodo from "./components/CreateTodo";

export default function App() {
  const [todos, setTodos] = useState([]);
  return (
    <>
      <Appbar />
      <div className="gap-between" />
      <div className="container">
        <CreateTodo todos={todos} setTodos={setTodos} />
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </>
  );
}
