import React from "react";
import styles from "./UsersList.module.css";

const UsersList = (props) => {
  if (!props.data.length){
    return <h2> No User Information to Show</h2>
  }
  return (
    <div className={styles.main}>
      <ul>
        {props.data.map((user) => {
          return (
            <li key={Math.random()}>
              <span>{`${user.name} (${user.age} years old)`}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UsersList;
