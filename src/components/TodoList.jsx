import Todo from "./Todo";
import todos from "./data";
const TodoList = ({ todos, setTodos }) => {
  return (
    <div className="todo-list-container">
      <div>
        <h3 className="">Todos</h3>
        <hr />
        {todos.length ? (
          <div>
            {todos
              .filter((todo) => todo?.isDone !== true)
              .map((todo, index) => (
                <div key={index}>
                  <div className="gap-between" />
                  <Todo todoData={todo} setTodos={setTodos} />
                </div>
              ))}
          </div>
        ) : (
          <div className="empty-todos-list">
            <h3>Empty todo</h3>
          </div>
        )}
      </div>
      <div className="gap-between" />
      <div className="todo-list-container">
        <h3>Done</h3>
        <hr />
        {todos.length ? (
          <div>
            {todos
              .filter((todo) => todo?.isDone === true)
              .map((todo, index) => (
                <div key={index}>
                  <div className="gap-between" />
                  <Todo todoData={todo} setTodos={setTodos} />
                </div>
              ))}
          </div>
        ) : (
          <div className="empty-todos-list">
            <h3>Empty todo</h3>
          </div>
        )}
      </div>
    </div>
  );
};
export default TodoList;
