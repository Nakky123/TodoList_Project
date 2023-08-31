import React, { useState, useEffect, useRef } from "react";
import TodoItem from "../TodoItem/Todoitem";
import "../TodoList/TodoList.css";
import DateDisplay from "../DateDisplay/DateDisplay";

function TodoList({ indexId, setIndex }) {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue === null) return [];
    return JSON.parse(localValue);
  });
  const [currentTodo, setCurrentTodo] = useState("");
  const [editId, setEditId] = useState(null);
  const [filtered, setFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const inputRef = useRef(null);
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

  // Event handler for input change
  const handleTodoChange = (event) => {
    setCurrentTodo(event.target.value);
  };

  // Event handler for adding a new todo
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

  // Event handler for editing a todo and make it focus when we click on the edit button
  const handleEditTodo = (id) => {
    const editedTodo = todos.find((todo) => todo.id === id);
    if (editedTodo) {
      setCurrentTodo(editedTodo.text);
      setEditId(id);
      // AutoFocus when you clock Edit button
      inputRef.current.focus();
    }
  };

  // Event handler for saving an edited todo
  const handleSaveEdit = () => {
    if (editId !== null) {
      const updatedTodos = todos.map((todo) =>
        todo.id === editId ? { ...todo, text: currentTodo } : todo
      );
      setTodos(updatedTodos);
      setCurrentTodo("");
      setEditId(null);
    }
  };

  // Event handler for handling Enter key press
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      if (editId !== null) {
        handleSaveEdit();
      } else {
        handleAddTodo();
      }
    }
  };

  // Event handler for marking a todo as completed
  const handleComplete = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: true } : todo
    );
    setTodos(updatedTodos);
  };

  // Event handler for undoing completion of a todo
  const handleUndo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: false } : todo
    );
    setTodos(updatedTodos);
  };

  // Event handler for deleting a todo
  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  // Event handler for expanding/collapsing a todo
  const handleExpandTodo = (id) => {
    const updatedTodos = [...todos];
    const todo = updatedTodos.find((t) => t.id === id);
    if (todo) {
      todo.expanded = !todo.expanded;
      setTodos(updatedTodos);
    }
  };

  // Event handler for search query change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filtering based on completion and search
  const filteredTodo =
    filtered === "All"
      ? todos
      : todos.filter((t) =>
          filtered === "Doing" ? !t.completed : t.completed
        );

  const searchedTodo = filteredTodo.filter((t) =>
    t.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const titleBtn = ["All", "Doing", "Done"];

  return (
    <div>
      <div className="wrapper-2">
        <input
          type="text"
          placeholder="Enter a Todo..."
          className="todoEnter"
          value={currentTodo}
          onChange={handleTodoChange}
          onKeyDown={handleKeyDown}
          ref={inputRef}
        />
        <button
          className="btn"
          onClick={editId === null ? handleAddTodo : handleSaveEdit}
        >
          {editId === null ? "Add" : "Save"}
        </button>
      </div>
      <div className="wrapper-3">
        {titleBtn.map((btn, index) => (
          <button
            className={index === indexId ? "btn btn-active" : "btn"}
            onClick={() => {
              setFilter(btn);
              setIndex(index);
            }}
          >
            {btn}
          </button>
        ))}
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
  );
}

export default TodoList;
