import React from "react";

import styles from "./Button.module.css";

const Button = (props) => {
  return <button className={styles.button__confirm}>{props.children}</button>;
};

export default Button;
