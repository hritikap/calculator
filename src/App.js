import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import { useState } from "react";
import { evaluate } from "mathjs";

const App = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const addToText = (val) => {
    setText((text) => [...text, val + " "]);
  };
  const calculateResult = () => {
    const input = text.join("");
    setResult(evaluate(input));
  };

  const resetInput = () => {
    setResult("");
    setText("");
  };

  return (
    <div className="App">
      <div className="calc-wrapper">
        <Input text={text} result={result} />

        <div className="row">
          <Button symbol="9 " handleClick={addToText} />
          <Button symbol="8" handleClick={addToText} />
          <Button symbol="7" handleClick={addToText} />
          <Button symbol="/" color="grey" handleClick={addToText} />
        </div>
        <div className="row">
          <Button symbol="4" handleClick={addToText} />
          <Button symbol="5" handleClick={addToText} />
          <Button symbol="6" handleClick={addToText} />
          <Button symbol="*" color="grey" handleClick={addToText} />
        </div>
        <div className="row">
          <Button symbol="1" handleClick={addToText} />
          <Button symbol="2" handleClick={addToText} />
          <Button symbol="3" handleClick={addToText} />
          <Button symbol="-" color="grey" handleClick={addToText} />
        </div>
        <div className="row">
          <Button symbol="0" handleClick={addToText} />
          <Button symbol="." handleClick={addToText} />
          <Button symbol="=" handleClick={calculateResult} />
          <Button symbol="+" color="grey" handleClick={addToText} />
        </div>
        <Button symbol="Reset" color="#DE8F1F" handleClick={resetInput} />
      </div>
    </div>
  );
};
export default App;
