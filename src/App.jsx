import "./App.css";
import { useState } from "react";
import Counter from "./components/Counter";
import ExponentTwo from "./components/ExponentTwo";
import ExponentThree from "./components/ExponentThree";
import ExponentFour from "./components/ExponentFour";
import ExponentFive from "./components/ExponentFive";
import ExponentSix from "./components/ExponentSix";

function App() {
  const [count, setCount] = useState(0);
  const counter = count;

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
        <ExponentTwo counter={counter} />
        <ExponentThree counter={counter} />
        <ExponentFour counter={counter} />
        <ExponentFive counter={counter} />
        <ExponentSix counter={counter} />
      </div>
    </div>
  );
}

export default App;
