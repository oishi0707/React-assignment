import { useState } from "react";

function AddTask() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      setMessage("Task title is required");
      return;
    }

    const task = {
      id: Date.now(),
      title,
      description,
      completed: false,
    };

    const oldTasks = JSON.parse(localStorage.getItem("tasks")) || [];

    localStorage.setItem(
      "tasks",
      JSON.stringify([...oldTasks, task])
    );

    setTitle("");
    setDescription("");
    setMessage("Task added successfully!");
  };

  return (
    <div className="page">
      <h1>Add Task</h1>

      <div className="form-box">
        <form onSubmit={handleSubmit}>
          <label>Task Title</label>

          <input
            type="text"
            value={title}
            placeholder="Enter task title"
            onChange={(e) => setTitle(e.target.value)}
          />

          <label>Description</label>

          <textarea
            value={description}
            placeholder="Enter task description"
            onChange={(e) => setDescription(e.target.value)}
          />

          <button type="submit">Add Task</button>

          {message && <p className="success">{message}</p>}
        </form>
      </div>
    </div>
  );
}

export default AddTask;