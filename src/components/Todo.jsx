import { AiOutlineClose } from "react-icons/ai";
const Todo = ({ todoData, setTodos }) => {
  const hundleDelete = () => {
    setTodos((prevTodos) => {
      prevTodos.filter((todo) => todo?.id !== todoData?.id);
      return [];
    });
  };
  return (
    <div className="todo-root">
      <div className="todo-title">
        <div className="checkbox-container">
          <input type="checkbox" />
        </div>

        <h4>{todoData?.title}</h4>
      </div>
      <button onClick={hundleDelete} className="delete-button">
        <AiOutlineClose className="delete-button-icon" />
      </button>
    </div>
  );
};
export default Todo;
