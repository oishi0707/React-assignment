import { Link } from "react-router-dom";
import { useTasks } from "../context/TaskContext";

function CompletedTasks() {
  const { tasks } = useTasks();

  const completedTasks = tasks.filter(
    (task) => task.status === "Closed"
  );

  return (
    <div className="page">
      <h1>Completed Tasks</h1>

      {completedTasks.length === 0 ? (
        <p>No completed tasks yet.</p>
      ) : (
        <div className="task-list">
          {completedTasks.map((task) => (
            <div className="task-card" key={task.id}>
              <h2>{task.header}</h2>

              <p>{task.description}</p>

              <p>
                <strong>Category:</strong> {task.category}
              </p>

              <p>
                <strong>Status:</strong> Closed
              </p>

              <Link to={`/tasks/${task.id}`}>
                View Details
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CompletedTasks;