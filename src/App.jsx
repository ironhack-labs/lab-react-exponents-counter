import "./App.css";
import Counter from "./components/Counter";
import ExponentTwo from "./components/ExponentTwo";
import ExponentThree from "./components/ExponentThree";
import ExponentFour from "./components/ExponentFour";
import ExponentFive from "./components/ExponentFive";
import ExponentSix from "./components/ExponentSix";
import { useState } from "react";

function App () {
  const [count, setCount] = useState(0);

  const decrement = () => setCount((prevCount) => prevCount - 1);
  const increment = () => setCount((prevCount) => prevCount + 1);

  const calculateExponent = (base, exponent) => {
    return Math.pow(base, exponent);
  };

  return (
    <div className="App">
      <h2><em>Counter</em></h2>
  
      <Counter count= {count}  decrement={ decrement}   increment= {increment } />

      <br />
      <h2><em>Exponents</em></h2>

      <div className="container">
        <ExponentTwo  count= {count} calculateExponent = {calculateExponent} />
        <ExponentThree count= {count} calculateExponent = {calculateExponent}  />
        <ExponentFour  count= {count}  calculateExponent = {calculateExponent} />
        <ExponentFive  count= {count} calculateExponent = {calculateExponent}  />
        <ExponentSix count= {count}  calculateExponent = {calculateExponent} />
      </div>
    </div>
  );
}

export default App;
