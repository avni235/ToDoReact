import React, { useState } from "react";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState("");

  const addTask = () => {
    if (taskName.trim() === "") {
      alert("Add task!");
      return;
    }

    setTasks([...tasks, { name: taskName, checked: false }]);
    setTaskName("");
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const toggleCheckTask = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, checked: !task.checked } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div>
      <div className="row">
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="Add your task..."
        />
        <button onClick={addTask}>Add</button>
      </div>
      <ul id="list-container">
        {tasks.map((task, index) => (
          <li key={index} className={task.checked ? "checked" : ""}>
            <input
              type="checkbox"
              checked={task.checked}
              onChange={() => toggleCheckTask(index)}
            />
            {task.name}
            <span onClick={() => deleteTask(index)}>&times;</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
