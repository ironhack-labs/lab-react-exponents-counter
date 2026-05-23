import "./App.css";
import { useState } from "react";
import Counter from "./components/Counter";
import Exponent from "./components/Exponent";

function App() {
  const [count, setCount] = useState(0);

  // const decrement = () => setCount((prevCount) => prevCount - 1);
  // const increment = () => setCount((prevCount) => prevCount + 1);

  return (
    <div className="App">
      <h2>
        <em>Counter</em>
      </h2>

      <Counter count={count} setCount={setCount} />

      <br />
      <h2>
        <em>Exponents</em>
      </h2>

      <div className="container">
        <Exponent symbol={"n²"} count={count} num={2} exponent={2} />
        <Exponent symbol={"n³"} count={count} num={2} exponent={3} />
        <Exponent symbol={"n⁴"} count={count} num={2} exponent={4} />
        <Exponent symbol={"n⁵"} count={count} num={2} exponent={5} />
        <Exponent symbol={"n⁶"} count={count} num={2} exponent={6} />
      </div>
    </div>
  );
}

export default App;
