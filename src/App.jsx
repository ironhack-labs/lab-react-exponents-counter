import "./App.css";
import Counter from "./components/Counter";

import { useState } from "react";
import Exponent from "./components/Exponent";

function App() {
  const [count, setCount] = useState(0);

  const decrement = () => {
    if (count !== 0) {
      setCount((prevCount) => prevCount - 1);
    }
  };
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
        <Exponent number={count} exponent={2} />
        <Exponent number={count} exponent={3} />
        <Exponent number={count} exponent={4} />
        <Exponent number={count} exponent={5} />
        <Exponent number={count} exponent={6} />
      </div>
    </div>
  );
}

export default App;
