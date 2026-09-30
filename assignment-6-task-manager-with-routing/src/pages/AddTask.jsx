import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTasks } from "../context/TaskContext";

function AddTask() {
  const { addTask } = useTasks();
  const navigate = useNavigate();

  const [task, setTask] = useState({
    header: "",
    description: "",
    priority: "Medium",
    category: "Academic",
    dueDate: "2026-08-28",
  });

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addTask(task);

    alert("Task added successfully!");

    navigate("/tasks");
  };

  return (
    <div className="page">
      <h1>Add Task</h1>

      <form onSubmit={handleSubmit} className="task-form">

        <label>Task Header</label>
        <input
          type="text"
          name="header"
          value={task.header}
          onChange={handleChange}
          placeholder="Enter task title"
          required
        />

        <label>Task Description</label>
        <textarea
          name="description"
          value={task.description}
          onChange={handleChange}
          placeholder="Enter task description"
          required
        />

        <label>Priority</label>
        <select
          name="priority"
          value={task.priority}
          onChange={handleChange}
        >
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>

        <label>Category</label>
        <select
          name="category"
          value={task.category}
          onChange={handleChange}
        >
          <option>Academic</option>
          <option>Personal</option>
        </select>

        <label>Due Date</label>
        <input
          type="date"
          name="dueDate"
          value={task.dueDate}
          onChange={handleChange}
        />

        <button type="submit" className="main-button">
          Add Task
        </button>

      </form>
    </div>
  );
}

export default AddTask;