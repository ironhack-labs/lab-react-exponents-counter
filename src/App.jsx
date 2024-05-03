import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import Exponent from "./components/Exponent";
import ExponentTwo from "./components/ExponentTwo";
import ExponentThree from "./components/ExponentThree";
import ExponentFour from "./components/ExponentFour";
import ExponentFive from "./components/ExponentFive";
import ExponentSix from "./components/ExponentSix";


function App () {


  // I pull up the state variable and all functions that change it, then pass them down as props.

  const [count, setCount] = useState(0);

  // arrow function in an arrow function. no need to use prevCount really.

  const decrement = () => setCount((prevCount) => prevCount - 1);

  const increment = () => setCount((prevCount) => prevCount + 1);

  return (
    <div className="App">
      <h2><em>Counter</em></h2>
  
      <Counter count={count} decrementCallback = {decrement} incrementCallback={increment}/>

      <br />
      <h2><em>Exponents</em></h2>

      <div className="container">
        <Exponent count = {count} exponent={2}/>
        <Exponent count = {count} exponent={3}/>
        <Exponent count = {count} exponent={4}/>
        <Exponent count = {count} exponent={5}/>
        <Exponent count = {count} exponent={6}/>
        
        {/* <ExponentTwo count={count} />
        <ExponentThree count={count} />
        <ExponentFour count={count} />
        <ExponentFive count={count} />
        <ExponentSix count={count} /> */}
      </div>
    </div>
  );
}

export default App;
