import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (username && password) {
      localStorage.setItem("taskManagerLogin", "true");
      navigate("/");
    } else {
      alert("Please enter username and password");
    }
  };

  return (
    <div className="page login-page">
      <h1>Task Manager Login</h1>

      <form onSubmit={handleLogin} className="task-form">
        <label>Username</label>

        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter username"
        />

        <label>Password</label>

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
        />

        <button type="submit" className="main-button">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;