import React, { useState } from "react";
import NewUser from "./components/Users/NewUser";
import UsersList from "./components/Users/UsersList";

import "./App.css";

const App = () => {
  const [users, setUsers] = useState([]);

  const addNewUser = (user) => {
    setUsers((users) => [...users, user]);
  };

  return (
    <div>
      <NewUser onAdd={addNewUser} />
      <UsersList data={users} />
    </div>
  );
};

export default App;
