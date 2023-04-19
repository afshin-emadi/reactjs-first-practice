import React from "react";
import styles from "./UsersList.module.css";


const UsersList = (props) => {
  return (
    <div>
      <ul>
        <li>
            <span>{`${'NAME'} (${'AGE'} years old)`}</span>
        </li>
      </ul>
    </div>
  );
};

export default UsersList;
