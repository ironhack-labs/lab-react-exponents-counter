import "./App.css";
import { useState } from "react";
import Counter from "./components/Counter";
import Exponent from "./components/Exponent";

function App() {
  const [count, setCount] = useState(0);
  const decrement = () => setCount((prevCount) => prevCount - 1);
  const increment = () => setCount((prevCount) => prevCount + 1);

  return (
    <div className="App">
      <h2>
        <em>Counter</em>
      </h2>

      <Counter count={count} increment={increment} decrement={decrement} />

      <br />
      <h2>
        <em>Exponents</em>
      </h2>

      <div className="container">
        <Exponent count={count} num={2}/>
        <Exponent count={count} num={3}/>
        <Exponent count={count} num={4}/>
        <Exponent count={count} num={5}/>
        <Exponent count={count} num={6}/>
        <Exponent count={count} num={7}/>
        <Exponent count={count} num={8}/>
      </div>
    </div>
  );
}

export default App;
