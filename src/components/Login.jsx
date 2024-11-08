import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize the navigate function

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await fetch("https://json-testtt.vercel.app/users");
    const users = await response.json();
    const user = users.find(
      (u) => u.username === username && u.password === password
    );
    if (user) {
        console.log("userFound",user)
        // setPage("home");
        navigate("/home");
      onLogin(user);

    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
