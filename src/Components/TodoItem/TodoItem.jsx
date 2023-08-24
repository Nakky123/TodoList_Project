import "./TodoItem.css";
function TodoItem({
  todo,
  index,
  handleEditTodo,
  handleToggleComplete,
  handleDeleteTodo,
  handleExpandTodo,
}) {
  return (
    <div className={`todoItem ${todo.completed ? "completed" : ""}`}>
      <span
        className={`text ${todo.expanded ? "expanded" : ""}`}
        onClick={() => handleExpandTodo(index)}
        title={todo.text.length > 20 ? todo.text : ""}
      >
        {todo.expanded
          ? todo.text
          : todo.text.length > 100
          ? `${todo.text.slice(0, 100)}...`
          : todo.text}
      </span>
      <div className="buttons">
        <button className="editBtn" onClick={() => handleEditTodo(index)}>
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button
          className="completeBtn"
          onClick={() => handleToggleComplete(index)}
        >
          {todo.completed ? "Undo" : "Complete"}
        </button>
        <button className="deleteBtn" onClick={() => handleDeleteTodo(index)}>
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
