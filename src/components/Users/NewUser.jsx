import React, { useState } from "react";
import styles from "./NewUser.module.css";
import Button from "../UI/Button";
import Modal from "../UI/Modal";

const NewUser = (props) => {
  const [error, setError] = useState(null);
  const [inputName, setInputName] = useState("");
  const [inputAge, setInputAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();

    if (inputName.trim().length === 0 || inputAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age(none-empty values).",
      });
      return;
    }
    if (+inputAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (>0).",
      });
      return;
    }

    props.onAdd({
      name: inputName,
      age: inputAge,
    });
    setInputName("");
    setInputAge("");
  };

  const nameChangeHandler = (event) => {
    setInputName(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setInputAge(event.target.value);
  };
  const handleConfirm = () => {
    setError(null);
  };
  return (
    <div className={styles.main}>
      {error && (
        <Modal
          title={error.title}
          message={error.message}
          onConfirm={handleConfirm}
        />
      )}
      <form onSubmit={addUserHandler}>
        <div>
          <div className={styles["form-input"]}>
            <label htmlFor="name">{"Username"}</label>
            <input
              id="name"
              type="text"
              value={inputName}
              onChange={nameChangeHandler}
            />
          </div>
          <div className={styles["form-input"]}>
            <label htmlFor="age">{"Age (Years)"}</label>
            <input
              id="age"
              type="number"
              step={"1"}
              value={inputAge}
              onChange={ageChangeHandler}
            />
          </div>
        </div>
        <div>
          <Button type="submit">Add User</Button>
        </div>
      </form>
    </div>
  );
};

export default NewUser;
