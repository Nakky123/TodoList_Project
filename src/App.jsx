import React, { useState } from "react";
import "./index.css";
import TodoList from "./Components/TodoList/TodoList";
import DateDisplay from "./Components/DateDisplay/DateDisplay";

function App() {
  const [index, setIndex] = useState(0);
  const setIndexId = (index) => setIndex(index);
  return (
    <main className="wrapper">
      <DateDisplay />
      <h1 className="header">Todo List</h1>
      <TodoList indexId={index} setIndex={setIndex} />
    </main>
  );
}

export default App;
