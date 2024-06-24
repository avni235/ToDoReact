// App.js
import React from "react";
import "./App.css";
import TodoList from "./components/ToDoList";

function App() {
  return (
    <div className="container">
      <div className="todo-app">
        <h2>To-Do List</h2>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
