import "./App.css";
import Counter from "./components/Counter";
import ExponentTwo from "./components/ExponentTwo";
import ExponentThree from "./components/ExponentThree";
import ExponentFour from "./components/ExponentFour";
import ExponentFive from "./components/ExponentFive";
import ExponentSix from "./components/ExponentSix";
import { useState } from "react";

function App () {
  const [count, setCount] = useState(0);

  const decrement = () => setCount((prevCount) => prevCount - 1);
  const increment = () => setCount((prevCount) => prevCount + 1);

  function repeatMultiplication(count, times) {
  let text = "";
  for (let i = 0; i < times; i++) {
    text += count;
    if (i < times - 1) text += " * ";
  }
  return text;
}
  return (
    <div className="App">
      <h2><em>Counter</em></h2>
  
      <Counter 
        count = {count}
        onDecrement = {decrement}
        onIncrement = {increment}
        
  
      />

      <br />
      <h2><em>Exponents</em></h2>

      <div className="container">
        <ExponentTwo
        count = {count}
        onDecrement = {decrement}
        onIncrement = {increment}
        onRepeatMulti ={repeatMultiplication}
        />
        <ExponentThree 
        count = {count}
        onDecrement = {decrement}
        onIncrement = {increment}
        onRepeatMulti ={repeatMultiplication}
        />
        <ExponentFour 
        count = {count}
        onDecrement = {decrement}
        onIncrement = {increment}  
        onRepeatMulti ={repeatMultiplication}    
        />
        <ExponentFive 
        count = {count}
        onDecrement = {decrement}
        onIncrement = {increment}
        onRepeatMulti ={repeatMultiplication}
        />
        <ExponentSix 
        count = {count}
        onDecrement = {decrement}
        onIncrement = {increment}
        onRepeatMulti ={repeatMultiplication}
        />
      </div>
    </div>
  );
}

export default App;
