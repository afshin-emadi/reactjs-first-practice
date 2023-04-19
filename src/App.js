import React from "react";
import NewUser from "./components/Users/NewUser";
import UsersList from "./components/Users/UsersList";

import "./App.css";

const App = () => {
  return (
    <div>
      <NewUser />
      <UsersList />
    </div>
  );
};

export default App;
