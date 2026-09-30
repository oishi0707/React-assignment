import { useAuth } from "../context/AuthContext";

function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="page">
      <h1>Dashboard</h1>

      <div className="welcome">
        <h2>Welcome, {user}! 👋</h2>
        <p>You are successfully logged in.</p>
      </div>

      <div className="stats">
        <div className="card">
          <h2>0</h2>
          <p>Total Tasks</p>
        </div>

        <div className="card">
          <h2>0</h2>
          <p>Pending Tasks</p>
        </div>

        <div className="card">
          <h2>0</h2>
          <p>Completed Tasks</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;