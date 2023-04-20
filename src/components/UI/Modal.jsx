import React from "react";
import styles from "./Modal.module.css";

import Button from "./Button";

const Modal = (props) => {
  const handleClick = () => {
    props.onConfirm();
  };
  return (
    <div className={styles.main}>
      <div className={styles.modal}>
        <h2 className={styles.modal__title}>{props.title}</h2>
        <div className={styles.modal__body}>
          <p>{props.message}</p>
          <div className={styles.modal__button}>
            <Button onClick={handleClick}>Okay</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
