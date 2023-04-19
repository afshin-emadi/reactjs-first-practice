import React from "react";
import styles from "./NewUser.module.css";

const NewUser = (props) => {
  return (
    <div>
      <form>
        <div>
          <div>
            <label>{"Username"}</label>
            <input type="text" />
          </div>
          <div>
            <label>{"Age (Years)"}</label>
            <input type="number" min={'1'} step={'1'}  />
          </div>
        </div>
        <div>
            <button>Add User</button>
        </div>
      </form>
    </div>
  );
};

export default NewUser;
