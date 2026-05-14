import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import Exponent from "./components/Exponent";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prevCount) => prevCount + 1);
  const decrement = () => setCount((prevCount) => prevCount - 1);

  return (
    <div className="App">
      <div className="container">
        <Counter count={count} increment={increment} decrement={decrement} />

        <Exponent num={count} exponent={2} />
        <Exponent num={count} exponent={3} />
        <Exponent num={count} exponent={4} />
        <Exponent num={count} exponent={5} />
        <Exponent num={count} exponent={6} />
      </div>
    </div>
  );
}

export default App;
