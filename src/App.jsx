import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateAccount from "./components/CreateAccount";
import Login from "./components/Login";
import Home from "./components/Home";
import Profile from "./components/Profile";

function App() {
  const [user, setUser] = useState(null);
  const [page, setPage] = useState("createAccount");

  const onAccountCreated = () => setPage("login");
  const onLogin = (user) => {
    setUser(user);
    setPage("home");
  };
  const onViewProfile = () => setPage("profile");
  const onUpdatePassword = () => setPage("home");

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<CreateAccount onAccountCreated={onAccountCreated} />} />
          <Route path="/login" element={<Login onLogin={onLogin} />} />
          <Route path="/home" element={<Home user={user} onViewProfile={onViewProfile} />} />
          <Route
            path="/profile"
            element={<Profile user={user} onUpdatePassword={onUpdatePassword} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
