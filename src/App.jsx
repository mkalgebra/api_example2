import "./App.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const [users, setUsers] = useState([]);

  const navigate = useNavigate();

  const openSingleUser = (id) => {
    navigate(`/users/${id}`);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setUsers(users));
  }, []);

  return (
    <div>
      <ul>
        {users &&
          users.map((user) => (
            <li key={user.id} onClick={() => openSingleUser(user.id)}>
              {user.name}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default App;
