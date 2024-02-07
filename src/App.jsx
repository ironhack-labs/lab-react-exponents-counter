import { useState } from "react";

import "./App.css";
import Counter from "./components/Counter";
import Exponent from "./components/Exponent";
// import ExponentTwo from "./components/ExponentTwo";
// import ExponentThree from "./components/ExponentThree";
// import ExponentFour from "./components/ExponentFour";
// import ExponentFive from "./components/ExponentFive";
// import ExponentSix from "./components/ExponentSix";

function App() {
  const [count, setCount] = useState(0);

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

      <div className="container">
        <Exponent count={count} exp={2} />
        <Exponent count={count} exp={3} />
        <Exponent count={count} exp={4} />
        <Exponent count={count} exp={5} />
        <Exponent count={count} exp={6} />
        <Exponent count={count} exp={7} />
        <Exponent count={count} exp={8} />
        <Exponent count={count} exp={9} />
        <Exponent count={count} exp={10} />
        <Exponent count={count} exp={11} />
        <Exponent count={count} exp={12} />
        <Exponent count={count} exp={13} />
        <Exponent count={count} exp={14} />
        <Exponent count={count} exp={15} />
        <Exponent count={count} exp={16} />
        <Exponent count={count} exp={17} />
        <Exponent count={count} exp={18} />
        <Exponent count={count} exp={19} />
        <Exponent count={count} exp={20} />
      </div>
    </div>
  );
}

export default App;
