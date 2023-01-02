import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineEdit } from "react-icons/ai";
import { AiOutlineSave } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";

import { useState, useRef, useEffect } from "react";
const Todo = ({ todoData, setTodos }) => {
  const [isEditing, setIsEditing] = useState(false);
  const hundleDelete = () => {
    setTodos((prevTodos) => {
      const newTodos = prevTodos.filter((todo) => todo?.id !== todoData?.id);
      return newTodos;
    });
  };
  const hundleEdit = () => {
    setIsEditing((prev) => !prev);
  };
  useEffect(() => {
    if (isEditing) {
      inputEl.current.focus();
    }
  }, [isEditing]);
  const inputEl = useRef("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos((prevTodos) => {
      const newTodos = prevTodos.filter((todo) => todo?.id !== todoData?.id);
      const updatedTodo = {
        ...todoData,
        title: inputEl.current.value,
      };
      return [...newTodos, updatedTodo];
    });
    setIsEditing(false);
  };

  const hundelCheck = () => {
    setTodos((prevTodos) => {
      const newTodos = prevTodos.filter((todo) => todo?.id !== todoData?.id);
      const updatedTodo = {
        ...todoData,
        isDone: !todoData.isDone,
      };
      return [...newTodos, updatedTodo];
    });
  };

  return (
    <div className="todo-root">
      <div className="todo-title-container">
        <div className="checkbox-container">
          <input
            checked={todoData?.isDone}
            onChange={hundelCheck}
            type="checkbox"
          />
        </div>
        {isEditing ? (
          <form className="edit-todo-form" onSubmit={handleSubmit}>
            <input
              defaultValue={todoData?.title}
              ref={inputEl}
              className="edit-todo-input"
              type="text"
            />
          </form>
        ) : !todoData?.isDone ? (
          <h4>{todoData?.title}</h4>
        ) : (
          <del>
            <h4>{todoData?.title}</h4>
          </del>
        )}
      </div>

      {isEditing ? (
        <>
          <button onClick={handleSubmit} className="icon-button">
            <AiOutlineSave className="icon-button-icon" />
          </button>
          <button onClick={hundleEdit} className="icon-button">
            <AiOutlineCloseCircle className="icon-button-icon" />
          </button>
        </>
      ) : (
        <>
          <button onClick={hundleEdit} className="icon-button">
            <AiOutlineEdit className="icon-button-icon" />
          </button>
          <button onClick={hundleDelete} className="icon-button">
            <AiOutlineClose className="icon-button-icon" />
          </button>
        </>
      )}
    </div>
  );
};
export default Todo;
