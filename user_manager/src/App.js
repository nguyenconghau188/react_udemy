import React, { useState } from "react";

import AddUser from "./Users/AddUser";
import UsersList from "./Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const handleAddNewUser = (user) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: user.name, age: user.age, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <AddUser handleAddUser={handleAddNewUser} />
      <UsersList usersList={usersList} />
    </div>
  );
}

export default App;
