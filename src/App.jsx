import "./App.css";
import Counter from "./components/Counter";
import Exponent from "./components/Exponent";
import { useState } from "react";


function App () {
  const [count, setCount] = useState(0);
  const powers = [2,3,4,5,6]
  return (
    <div className="App">
      <h2><em>Counter</em></h2>
  
      <Counter count={count} setCount={setCount}/>

      <br />
      <h2><em>Exponents</em></h2>

      <div className="container">
        {
          powers.map((exponent) =>(
            <Exponent key={exponent} count={count} exponent={exponent}/>
          ))}
      </div>
    </div>
  );
}

export default App;
