import "./App.css";
import Counter from "./components/Counter";
import { useState } from "react";
import Exponents from "./components/Exponents.";

function App() {
  const [count, setCount] = useState(0);

  const decrement = () => setCount((prevCount) => prevCount - 1);
  const increment = () => setCount((prevCount) => prevCount + 1);

  return (
    <div className="App">
      <h2>
        <em>Counter</em>
      </h2>
      <Counter decrement={decrement} increment={increment} count={count} />
      

      <br />
      <h2>
        <em>Exponents</em>
      </h2>

      <div className="container">
        <Exponents num={count} exponent={2} />
        <Exponents num={count} exponent={3} />
        <Exponents num={count} exponent={4} />
        <Exponents num={count} exponent={5} />
        <Exponents num={count} exponent={6} />
      </div>
    </div>
  );
}

export default App;
