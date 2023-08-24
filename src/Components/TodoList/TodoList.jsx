import React, { useState } from "react";
import "../TodoList/TodoList.css";

function TodoList() {
  return (
    <div>
      <br />
      <div className="wrapper-2">
        <input
          type="text"
          placeholder="Enter a Todo..."
          className="todoEnter"
        />
        <button className="btn">Add</button>
      </div>
    </div>
  );
}

export default TodoList;
