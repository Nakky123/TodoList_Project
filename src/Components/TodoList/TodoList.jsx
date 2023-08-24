import React, { useState } from "react";
import TodoItem from "../TodoItem/TodoItem";
import "../TodoList/TodoList.css";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [currentTodo, setCurrentTodo] = useState("");
  const [editIndex, setEditIndex] = useState(-1);

  const handleTodoChange = (event) => {
    setCurrentTodo(event.target.value);
  };

  const handleAddTodo = () => {
    if (currentTodo.trim() !== "") {
      if (editIndex !== -1) {
        const updatedTodos = [...todos];
        updatedTodos[editIndex].text = currentTodo;
        setTodos(updatedTodos);
        setEditIndex(-1);
      } else {
        setTodos([...todos, { text: currentTodo, completed: false }]);
      }
      setCurrentTodo("");
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleAddTodo();
    }
  };

  const handleEditTodo = (index) => {
    setCurrentTodo(todos[index].text);
    setEditIndex(index);
  };

  const handleToggleComplete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const handleExpandTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].expanded = !updatedTodos[index].expanded;
    setTodos(updatedTodos);
  };

  return (
    <div>
      <div className="todoList">
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo}
            index={index}
            handleEditTodo={handleEditTodo}
            handleToggleComplete={handleToggleComplete}
            handleDeleteTodo={handleDeleteTodo}
            handleExpandTodo={handleExpandTodo}
          />
        ))}
      </div>
      <br />
      <div className="wrapper-2">
        <input
          type="text"
          placeholder="Enter a Todo..."
          className="todoEnter"
          value={currentTodo}
          onChange={handleTodoChange}
          onKeyDown={handleKeyDown}
        />
        <button className="btn" onClick={handleAddTodo}>
          {editIndex === -1 ? "Add" : "Save"}
        </button>
      </div>
    </div>
  );
}

export default TodoList;
