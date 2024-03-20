import "./App.css";
import { useState } from "react";
import Counter from "./components/Counter";
// import ExponentTwo from "./components/ExponentTwo";
// import ExponentThree from "./components/ExponentThree";
// import ExponentFour from "./components/ExponentFour";
import Exponent from "./components/Exponent";
// import ExponentSix from "./components/ExponentSix";

function App() {
  const [count, setCount] = useState(0);
  const decrement = () => setCount((prevCount) => prevCount - 1);
  const increment = () => setCount((prevCount) => prevCount + 1);

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
        <Exponent exponent={2} num={count} />
        <Exponent exponent={3} num={count} />
        <Exponent exponent={4} num={count} />
        <Exponent exponent={5} num={count} />
        <Exponent exponent={6} num={count} />
      </div>
    </div>
  );
}

export default App;
