import "./App.css";
import { useState } from "react";
import Counter from "./components/Counter";
import ExponentTwo from "./components/ExponentTwo";
import ExponentThree from "./components/ExponentThree";
import ExponentFour from "./components/ExponentFour";
import ExponentFive from "./components/ExponentFive";
import ExponentSix from "./components/ExponentSix";


function App ({ num, exponent }) {

  const result = Math.pow(num, exponent);

  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => Math.max(prev - 1, 0));

  return (
    <div className="App">
       <h3>
        {num} ^ {exponent} = {result}
      </h3>
  
      <Counter 
      count={count}
      increment={increment}
      decrement={decrement}
      />


      <br />
      <h2><em>Exponents</em></h2>

      <div className="container">
        <ExponentTwo num={2} exponent={count}/>
        <ExponentThree num={3} exponent={count}/>
         <ExponentFour num={4} exponent={count}/>
         <ExponentFive num={5} exponent={count}/>
         <ExponentSix num={6} exponent={count}/>
      </div>
    </div>
  );
}

export default App;
