import { Link, useParams } from "react-router-dom";
import { useTasks } from "../context/TaskContext";

function TaskDetails() {
  const { id } = useParams();
  const { tasks } = useTasks();

  const task = tasks.find(
    (item) => item.id.toString() === id
  );

  if (!task) {
    return (
      <div className="page">
        <h1>Task Not Found</h1>
        <Link to="/tasks">Back to Tasks</Link>
      </div>
    );
  }

  return (
    <div className="page">
      <h1>Task Details</h1>

      <div className="details-card">
        <h2>{task.header}</h2>

        <p>
          <strong>Description:</strong> {task.description}
        </p>

        <p>
          <strong>Priority:</strong> {task.priority}
        </p>

        <p>
          <strong>Category:</strong> {task.category}
        </p>

        <p>
          <strong>Raised Date & Time:</strong> {task.raisedAt}
        </p>

        <p>
          <strong>Due Date:</strong> {task.dueDate}
        </p>

        <p>
          <strong>Status:</strong> {task.status}
        </p>

        <Link to="/tasks" className="main-button">
          Back to Tasks
        </Link>
      </div>
    </div>
  );
}

export default TaskDetails;