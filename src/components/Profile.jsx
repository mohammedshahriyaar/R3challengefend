import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // We'll use this for redirection

function Profile({ user, onUpdatePassword }) {
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // hook to handle redirection

  const handleUpdatePassword = async () => {
    const url = `https://json-testtt.vercel.app/users/${user.id}`;
    const response = await fetch(url, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (response.ok) {
      const urlParams = new URLSearchParams(window.location.search);

      // Check if the 'admin' query parameter is true and id is 101
      if (urlParams.get("admin") === "true" && urlParams.get("id") === "101") {
        
        const flag = "Admin NOW HURRAY"
        
        // Display the flag
        alert(`Flag: ${flag}`);
        
        // Redirect to home page
        navigate("/home");  // Assuming the home page is at /home
      } else {
        // Regular case: password update succeeded
        onUpdatePassword();
      }
    } else {
      alert("Failed to update password.");
    }
  };

  return (
    <div>
      <h2>Profile</h2>
      <input
        type="password"
        placeholder="New Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button onClick={handleUpdatePassword}>Update Password</button>
    </div>
  );
}

export default Profile;
