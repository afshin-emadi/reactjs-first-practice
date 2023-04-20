import React, { useState } from "react";
import styles from "./NewUser.module.css";
import Button from "../UI/Button";
import Modal from "../UI/Modal";

const NewUser = (props) => {
  const [errorMsg, setErrorMsg] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const inputName = event.target[0].value;
    const inputAge = event.target[1].value;
    if (!inputName || !inputAge) {
      setErrorMsg("Please enter a valid name and age(none-empty values).");
      return;
    }
    else if (inputAge < 0) {
      setErrorMsg("Please enter a valid age (>0).");
      return;      
    }

    props.onAdd({
      name: inputName,
      age: inputAge,
    });
  };
  const handleConfirm = () => {
    setErrorMsg("");
  };
  return (
    <div className={styles.main}>
      {errorMsg && (
        <Modal
          title={"Invalid Input"}
          message={errorMsg}
          onConfirm={handleConfirm}
        />
      )}
      <form onSubmit={onSubmitHandler}>
        <div>
          <div className={styles["form-input"]}>
            <label>{"Username"}</label>
            <input type="text" />
          </div>
          <div className={styles["form-input"]}>
            <label>{"Age (Years)"}</label>
            <input type="number" step={"1"} />
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
