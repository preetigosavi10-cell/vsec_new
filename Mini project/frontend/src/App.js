 import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  // Get tasks from MongoDB
  function getTasks() {
    fetch("http://localhost:3000/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data))
      .catch(() => alert("Cannot connect to backend"));
  }

  useEffect(() => {
    getTasks();
  }, []);

  // Add task
  function addTask() {
    if (task.trim() === "") {
      alert("Please enter a task");
      return;
    }

    fetch("http://localhost:3000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ title: task })
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to add task");
        }
        setTask("");
        getTasks();
      })
      .catch(() => alert("Error adding task"));
  }

  // Delete task
  function deleteTask(id) {
    fetch("http://localhost:3000/tasks/" + id, {
      method: "DELETE"
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to delete task");
        }
        getTasks();
      })
      .catch(() => alert("Error deleting task"));
  }

  return (
    <div>
      <h1>My To-Do List</h1>

      <input
        type="text"
        placeholder="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={addTask}>Add Task</button>

      <ul>
        {tasks.map((item) => (
          <li key={item._id}>
            {item.title}
            <button onClick={() => deleteTask(item._id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;