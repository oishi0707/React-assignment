import { Link } from "react-router-dom";
import { useTasks } from "../context/TaskContext";

function Dashboard() {
  const { tasks } = useTasks();

  const pending = tasks.filter(
    (task) => task.status !== "Closed"
  ).length;

  const completed = tasks.filter(
    (task) => task.status === "Closed"
  ).length;

  return (
    <div className="page">
      <h1>Dashboard</h1>

      <div className="dashboard-cards">
        <div className="card">
          <h2>{tasks.length}</h2>
          <p>Total Tasks</p>
        </div>

        <div className="card">
          <h2>{pending}</h2>
          <p>Pending Tasks</p>
        </div>

        <div className="card">
          <h2>{completed}</h2>
          <p>Completed Tasks</p>
        </div>
      </div>

      <Link className="main-button" to="/add-task">
        + Create New Task
      </Link>
    </div>
  );
}

export default Dashboard;