import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function Home({ user, onViewProfile }) {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("https://json-testtt.vercel.app/users");
      const data = await response.json();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  return (
    <div>
      <h2>Home Page</h2>
      <ul>
        {users.map((u) => (
          <li key={u.id}>{u.username}</li>
        ))}
      </ul>
      <button onClick={()=> navigate('/profile')}>View Profile</button>
    </div>
  );
}

export default Home;
