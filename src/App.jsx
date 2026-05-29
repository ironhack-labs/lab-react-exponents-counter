import "./App.css";
import Counter from "./components/Counter";
import ExponentTwo from "./components/ExponentTwo";
import ExponentThree from "./components/ExponentThree";
import ExponentFour from "./components/ExponentFour";
import ExponentFive from "./components/ExponentFive";
import ExponentSix from "./components/ExponentSix";
import { useState } from "react"

function App () {

  // the state was lift up from Counter component to App component, so we can use it in all the exponent components as well
  const [count, setCount] = useState(0);

  // lift up is handled over callbacks passt down to child component
  const decrement = () => setCount((prevCount) => prevCount - 1);
  const increment = () => setCount((prevCount) => prevCount + 1);


  return (
    <div className="App">
      <h2><em>Counter</em></h2>
  
      <Counter increment={increment} decrement={decrement} count={count} /> 

      <br />
      <h2><em>Exponents</em></h2>

      <div className="container">
        <ExponentTwo count={count} />
        <ExponentThree count={count} />
        <ExponentFour count={count} />
        <ExponentFive count={count} />
        <ExponentSix count={count} />
      </div>
    </div>
  );
}

export default App;
