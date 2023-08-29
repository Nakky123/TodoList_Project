import React, { useState } from "react";
import "./index.css";
import TodoList from "./Components/TodoList/TodoList";

function App() {
  const [index, setIndex] = useState(0);
  const setIndexId = (index) => setIndex(index);
  return (
    <div>
      <TodoList indexId={index} setIndex={setIndex} />
    </div>
  );
}

export default App;
