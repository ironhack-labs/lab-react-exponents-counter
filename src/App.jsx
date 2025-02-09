import "./App.css";
import Counter from "./components/Counter";
import Exponent from "./components/Exponent";
import { useState } from "react";


function App () {

  const [count, setCount] = useState(0);
  const decrement = () => setCount((prevCount) => prevCount - 1);
  const increment = () => setCount((prevCount) => prevCount + 1);

  
  return (
    <div className="App">
      <h2><em>Counter</em></h2>
  
      <Counter callbackCount = {count} callbackDecrement = {decrement} callbackIncrement = {increment}/>

      <br />
      <h2><em>Exponents</em></h2>

      <div className="container">
        <Exponent callbackCount = {count}/>
  
      </div>
    </div>
  );
}

export default App;
