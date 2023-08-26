import React from "react";
import "./index.css";
import TodoList from "./Components/TodoList/TodoList";
import DateDisplay from "./Components/DateDisplay/DateDisplay";

function App() {
  return (
    <div className="wrapper">
      <DateDisplay />
      <h1 className="header">Todo List</h1>
      <TodoList />
    </div>
  );
}

export default App;
