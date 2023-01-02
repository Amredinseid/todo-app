import { useRef } from "react";
import data from "./data";
const CreateTodo = ({ setTodos }) => {
  const inputEl = useRef("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos((prevTodos) => {
      const newTodos = {
        isDone: false,
        title: inputEl.current.value
      };
      console.log(prevTodos);
      return [...prevTodos, newTodos];
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="create-todo-container">
        <input ref={inputEl} type="text" />
      </div>
    </form>
  );
};
export default CreateTodo;
