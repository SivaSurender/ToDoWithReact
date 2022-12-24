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

  console.log(inputArray);
  return (
    <div className="container">
      <div className="heading">
        <h1>To Do </h1>
        <InputForm inputArrayHandler={inputArrayHandler} />
        <div>
          <ul>
            {inputArray.map((item, index) => {
              return <ToDoItemScreen key={index} text={item} />;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
