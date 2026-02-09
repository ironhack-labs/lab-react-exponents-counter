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

  const decrement = () => setCount((prev) => prev - 1);
  const increment = () => setCount((prev) => prev + 1);

  return (
    <div className="App">
      <h2><em>Counter</em></h2>

      <Counter
        count={count}
        decrement={decrement}
        increment={increment}
      />

      <br />
      <h2><em>Exponents</em></h2>

      <div className="container">
        <ExponentTwo number={count} />
        <ExponentThree number={count} />
        <ExponentFour number={count} />
        <ExponentFive number={count} />
        <ExponentSix number={count} />
      </div>
    </div>
  );
}

export default App;
