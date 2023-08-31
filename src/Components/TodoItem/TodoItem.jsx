import React from "react";
import "./TodoItem.css";

function TodoItem({
  todo,
  handleEditTodo,
  handleComplete,
  handleUndo,
  handleDeleteTodo,
  handleExpandTodo,
}) {
  return (
    <div className={`todoItem ${todo.completed ? "completed" : ""}`}>
      <span
        className={`text ${todo.expanded ? "expanded" : ""}`}
        onClick={() => handleExpandTodo(todo.id)}
        title={todo.text.length > 20 ? todo.text : ""}
      >
        {todo.expanded
          ? todo.text
          : todo.text.length > 40
          ? `${todo.text.slice(0, 40)}...`
          : todo.text}
      </span>
      <div className="buttons">
        <button className="editBtn" onClick={() => handleEditTodo(todo.id)}>
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button
          className="completeBtn"
          onClick={() =>
            todo.completed ? handleUndo(todo.id) : handleComplete(todo.id)
          }
        >
          {todo.completed ? "Undo" : "Complete"}
        </button>
        <button className="deleteBtn" onClick={() => handleDeleteTodo(todo.id)}>
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
