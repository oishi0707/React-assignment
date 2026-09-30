import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();

  const getPasswordStrength = () => {
    if (password.length === 0) return "";

    if (password.length < 4) {
      return "Weak";
    }

    if (password.length < 8) {
      return "Medium";
    }

    return "Strong";
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!username.trim()) {
      setError("Username is required");
      return;
    }

    if (!password.trim()) {
      setError("Password is required");
      return;
    }

    const result = login(username, password, remember);

    if (result.success) {
      navigate("/dashboard");
    } else {
      setError(result.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Task Manager Login</h1>

        {error && <p className="error">{error}</p>}

        <form onSubmit={handleLogin}>
          <label>Username</label>

          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              setError("");
            }}
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError("");
            }}
          />

          {password && (
            <p className={`strength ${getPasswordStrength().toLowerCase()}`}>
              Password Strength: {getPasswordStrength()}
            </p>
          )}

          <label className="remember">
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
            />
            Remember Me
          </label>

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;