import "./App.css";
import Counter from "./components/Counter";
import Exponents from "./components/Exponents";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(1);

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

      <Exponents count={count} />
    </div>
  );
}

export default App;
