import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [enterUsername, setEnterUsername] = useState("");
  const [enterAge, setEnterAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enterAge < 1 || enterUsername === "") {
      return;
    }
    const user = {
      username: enterUsername,
      age: enterAge,
    };
    props.handleAddUser(user);
    setEnterUsername("");
    setEnterAge("");
  };

  const handleInputUsername = (event) => {
    setEnterUsername(event.target.value);
  };

  const handleInputAge = (event) => {
    setEnterAge(event.target.value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          onChange={handleInputUsername}
          value={enterUsername}
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          type="number"
          onChange={handleInputAge}
          value={enterAge}
        />
        <Button handleClick={addUserHandler}>Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
