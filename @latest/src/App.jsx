import "./App.css";
import { useState } from "react";
import InputForm from "./components/InputForm";

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
        <h1>Hi from</h1>
        <InputForm inputArrayHandler={inputArrayHandler} />
      </div>
    </div>
  );
}

export default App;
