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
  const decrement = () => setCount((prevCount) => {
    console.log('minus 1 prevC ',prevCount)
    prevCount - 1
  });
  const increment = () => setCount((prevCount) => {
    prevCount + 1
    console.log('plus 1 prevC ',prevCount)
  });

  return (
    <div className="App">
      <h2><em>Counter</em></h2>
  
      <Counter/>

      <br />
      <h2><em>Exponents</em></h2>

      <div className="container">
        <ExponentTwo />
        <ExponentThree />
        <ExponentFour />
        <ExponentFive />
        <ExponentSix />
      </div>
    </div>
  );
}

export default App;
