import React, { useState, useEffect } from "react";
import TodoItem from "../TodoItem/Todoitem";
import "../TodoList/TodoList.css";
import DateDisplay from "../DateDisplay/DateDisplay";

function TodoList() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue === null) return [];
    return JSON.parse(localValue);
  });
  const [currentTodo, setCurrentTodo] = useState("");
  const [editId, setEditId] = useState(null);
  const [filtered, setFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

  const handleTodoChange = (event) => {
    setCurrentTodo(event.target.value);
  };

  const handleAddTodo = () => {
    if (currentTodo.trim() !== "") {
      const newTodo = {
        id: Date.now(),
        text: currentTodo,
        completed: false,
        expanded: false,
      };

      setTodos((prevTodos) => [...prevTodos, newTodo]);
      setCurrentTodo("");
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleAddTodo();
    }
  };

  const handleEditTodo = (id) => {
    setCurrentTodo(todos.find((todo) => todo.id === id).text);
    setEditId(id);
  };

  const handleComplete = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: true } : todo
    );
    setTodos(updatedTodos);
  };

  const handleUndo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: false } : todo
    );
    setTodos(updatedTodos);
  };

  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleExpandTodo = (id) => {
    const updatedTodos = [...todos];
    const todo = updatedTodos.find((t) => t.id === id);
    if (todo) {
      todo.expanded = !todo.expanded;
      setTodos(updatedTodos);
    }
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredTodo =
    filtered === "All"
      ? todos
      : todos.filter((t) =>
          filtered === "Doing" ? !t.completed : t.completed
        );

  const searchedTodo = filteredTodo.filter((t) =>
    t.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className="wrapper">
        <DateDisplay />
        <h1 className="header">Todo List</h1>
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
            {editId === null ? "Add" : "Save"}
          </button>
        </div>
        <div className="wrapper-3">
          <button className="btn" onClick={() => setFilter("All")}>
            Todo
          </button>
          <button className="btn" onClick={() => setFilter("Doing")}>
            Doing
          </button>
          <button className="btn" onClick={() => setFilter("Complete")}>
            Complete
          </button>
          <input
            type="text"
            className="search"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
        <div className="todoList">
          {searchedTodo.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              handleEditTodo={() => handleEditTodo(todo.id)}
              handleComplete={() => handleComplete(todo.id)}
              handleUndo={() => handleUndo(todo.id)}
              handleDeleteTodo={() => handleDeleteTodo(todo.id)}
              handleExpandTodo={() => handleExpandTodo(todo.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TodoList;
