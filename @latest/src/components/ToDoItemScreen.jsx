import React from "react";

const ToDoItemScreen = (props) => {
  return (
    <div
      onClick={() => {
        props.inputDeleteHandler(props.index);
      }}
    >
      <li>
        <b>{props.text} </b>
      </li>
    </div>
  );
};

export default ToDoItemScreen;
