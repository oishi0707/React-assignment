import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(
    localStorage.getItem("user") || null
  );

  const login = (username, password, remember) => {
    if (!username || !password) {
      return {
        success: false,
        message: "Username and password are required",
      };
    }

    // JWT token simulation
    const fakeToken = btoa(
      JSON.stringify({
        username,
        loginTime: Date.now(),
      })
    );

    localStorage.setItem("token", fakeToken);

    if (remember) {
      localStorage.setItem("user", username);
    } else {
      sessionStorage.setItem("user", username);
    }

    setUser(username);

    return {
      success: true,
      message: "Login successful",
    };
  };

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    sessionStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}