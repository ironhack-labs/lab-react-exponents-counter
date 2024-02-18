import "./App.css";
import Counter from "./components/Counter";
import ExponentTwo from "./components/ExponentTwo";
import ExponentThree from "./components/ExponentThree";
import ExponentFour from "./components/ExponentFour";
import ExponentFive from "./components/ExponentFive";
import ExponentSix from "./components/ExponentSix";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const decrement = () => setCount((prevCount) => prevCount - 1);
  const increment = () => setCount((prevCount) => prevCount + 1);

  return (
    <div className="App">
      <h2>
        <em>Counter</em>
      </h2>

      <Counter
        sendCount={count}
        activateDecrement={decrement}
        activateIncrement={increment}
      />

      <br />
      <h2>
        <em>Exponents</em>
      </h2>

      <div className="container">
        <ExponentTwo sendCount={count} />
        <ExponentThree sendCount={count} />
        <ExponentFour sendCount={count} />
        <ExponentFive sendCount={count} />
        <ExponentSix sendCount={count} />
      </div>
    </div>
  );
}

export default App;
