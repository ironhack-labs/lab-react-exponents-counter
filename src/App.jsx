import "./App.css";
import Counter from "./components/Counter";
import ExponentTwo from "./components/ExponentTwo";
import ExponentThree from "./components/ExponentThree";
import ExponentFour from "./components/ExponentFour";
import ExponentFive from "./components/ExponentFive";
import ExponentSix from "./components/ExponentSix";
import Exponent from "./components/Exponent";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(1);
  const decrement = () => setCount((prevCount) => prevCount - 1);
  const increment = () => setCount((prevCount) => prevCount + 1);
  const exponents = [2, 3, 4, 5, 6];
  return (
    <div className="App">
      <h2>
        <em>Counter</em>
      </h2>

      <Counter
        count={count}
        setCount={setCount}
        decrement={decrement}
        increment={increment}
      />

      <br />
      <h2>
        <em>Exponents</em>
      </h2>
      <div className="container">
        {exponents.map((exponent) => (
          <Exponent key={exponent} count={count} exponent={exponent} />
        ))}
      </div>
    </div>
  );
}

export default App;
