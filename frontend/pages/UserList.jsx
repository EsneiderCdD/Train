import { useEffect, useState } from "react";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then(res => res.json())
      .then(data => setUsers(data.users || []))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Usuarios Registrados</h2>
      <ul>
        {users.map((user, idx) => (
          <li key={idx}>{user.fullname} - {user.email}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
