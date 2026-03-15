import "./App.css";
import Counter from "./components/Counter";
import ExpCounter from "./components/ExpCounter";
import Exponent from "./components/Exponent";
import ExponentTwo from "./components/ExponentTwo";
import ExponentThree from "./components/ExponentThree";
import ExponentFour from "./components/ExponentFour";
import ExponentFive from "./components/ExponentFive";
import ExponentSix from "./components/ExponentSix";
import { useState } from "react";


function App () {

  const [count, setCount] = useState(0);
  const [exponent, setExponent] = useState(1)

  const decrementExp = () => setExponent((prevCount) => prevCount - 1);
  const incrementExp = () => setExponent((prevCount) => prevCount + 1);
  const decrement = () => setCount((prevCount) => prevCount - 1);
  const increment = () => setCount((prevCount) => prevCount + 1);

  return (
    <div className="App">
      <h2><em>Counter</em></h2>
  
      <Counter count={count} onDecrement={decrement} onIncrement={increment}/>

      <ExpCounter exponent={exponent} onDecrement={decrementExp} onIncrement={incrementExp}/>

      <br />
      <h2><em>Exponents</em></h2>

      <div className="container">
        <Exponent count={count} exponent={exponent}/>
        <ExponentTwo count={count} />
        <ExponentThree count={count}/>
        <ExponentFour count={count}/>
        <ExponentFive count={count}/>
        <ExponentSix count={count}/>
      </div>
    </div>
  );
}

export default App;
