import "./App.css";
import { useState } from "react";
import InputForm from "./components/InputForm";
import ToDoItemScreen from "./components/ToDoItemScreen";

function App() {
  const [inputArray, setInputArray] = useState([]);

  const inputArrayHandler = (userInput) => {
    setInputArray((prevArray) => {
      return [...prevArray, userInput];
    });
  };

  const inputDeleteHandler = (id) => {
    setInputArray((prevArray) => {
      return prevArray.filter((item, index) => {
        return index !== id;
      });
    });
  };

  console.log(inputArray);
  return (
    <div className="container">
      <div className="heading">
        <h1>To Do </h1>
        <InputForm inputArrayHandler={inputArrayHandler} />
        <div>
          <ul>
            {inputArray.length > 0 &&
              inputArray.map((item, index) => {
                return (
                  <ToDoItemScreen
                    key={index}
                    text={item}
                    index={index}
                    inputDeleteHandler={inputDeleteHandler}
                  />
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
