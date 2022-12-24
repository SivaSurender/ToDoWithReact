import React from "react";

import { useState } from "react";

const InputForm = (props) => {
  const [text, setText] = useState("");

  const onTextHandler = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="form">
      <input type="text" onChange={onTextHandler} value={text}></input>
      <button
        onClick={() => {
          props.inputArrayHandler(text);
          setText("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
};

export default InputForm;
