import Todo from "./Todo";
import todos from "./data";
const TodoList = ({ todos, setTodos }) => {
  // const todos = [1, 2, 3, 4, 5, 6];
  return (
    <div>
      {todos.map((todo, index) => (
        <>
          <div className="gap-between" />
          <Todo key={index} todoData={todo} setTodos={setTodos} />
        </>
      ))}
    </div>
  );
};
export default TodoList;
