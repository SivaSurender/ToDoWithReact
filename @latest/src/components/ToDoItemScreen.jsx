import React from "react";

const ToDoItemScreen = (props) => {
  return (
    <div>
      <li>
        <b>{props.text} </b>
      </li>
    </div>
  );
};

export default ToDoItemScreen;
