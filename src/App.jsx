import "./App.css";
import Counter from "./components/Counter";
import ExponentTwo from "./components/ExponentTwo";
import ExponentThree from "./components/ExponentThree";
import ExponentFour from "./components/ExponentFour";
import ExponentFive from "./components/ExponentFive";
import ExponentSix from "./components/ExponentSix";
import { useState } from "react";
import Exponent from "./components/Exponent";

function App() {
  const [count, setCount] = useState(0);

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
        <ExponentTwo count={count} />
        <ExponentThree count={count} />
        <ExponentFour count={count} />
        <ExponentFive count={count} />
        <ExponentSix count={count} />
        <Exponent num={count} exponent={count}/>
      </div>
    </div>
  );
}

export default App;
