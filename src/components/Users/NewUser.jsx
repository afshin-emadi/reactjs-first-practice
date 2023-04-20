import React, { useState } from "react";
import styles from "./NewUser.module.css";
import Button from "../UI/Button";
import Modal from "../UI/Modal";

const NewUser = (props) => {
  
  const [errorMsg, setErrorMsg] = useState('')

  const onSubmitHandler = (event) => {
    event.preventDefault();
    props.onAdd({
      name: event.target[0].value,
      age: event.target[1].value,
    });
  };
  return (
    <div className={styles.main}>
      {errorMsg && <Modal title={'Invalid Input'} message={errorMsg}/>}
      <form onSubmit={onSubmitHandler}>
        <div>
          <div className={styles["form-input"]}>
            <label>{"Username"}</label>
            <input type="text" />
          </div>
          <div className={styles["form-input"]}>
            <label>{"Age (Years)"}</label>
            <input type="number" min={"1"} step={"1"} />
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
