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
  
      <Counter callbackDecrement={decrement} callbackIncrement={increment} count={count}/>

      <br />
      <h2><em>Exponents</em></h2>

      <div className="container">
        <Exponent exponent={2} count = {count}/>
        <Exponent exponent={3} count = {count}/>
        <Exponent exponent={4} count = {count}/>
        <Exponent exponent={5} count = {count}/>
        <Exponent exponent={6} count = {count}/>
      </div>
    </div>
  );
}

export default App;
