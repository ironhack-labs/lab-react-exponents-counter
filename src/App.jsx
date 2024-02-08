import "./App.css";
import React, { useState } from "react";
import Counter from "./components/Counter";
import ExponentTwo from "./components/ExponentTwo";
import ExponentThree from "./components/ExponentThree";
import ExponentFour from "./components/ExponentFour";
import ExponentFive from "./components/ExponentFive";
import ExponentSix from "./components/ExponentSix";

function App() {
  const [count, setCount] = useState(0); //LIFTED UP

  const decrement = () => setCount((prevCount) => prevCount - 1); //LIFTED UP
  const increment = () => setCount((prevCount) => prevCount + 1); //LIFTED UP

  return (
    <div className="App">
      <h2>
        <em>Counter</em>
      </h2>

      <Counter count={count} decrement={decrement} increment={increment} />

      <br />
      <h2>
        <em>Exponents</em>
      </h2>

      <div className="container">
        <ExponentTwo counter={count} />
        <ExponentThree counter={count} />
        <ExponentFour counter={count} />
        <ExponentFive counter={count} />
        <ExponentSix counter={count} />
      </div>
    </div>
  );
}

export default App;
