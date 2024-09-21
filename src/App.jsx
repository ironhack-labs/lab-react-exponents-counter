import "./App.css";
import Counter from "./components/Counter";
import Exponents from "./components/Exponents"
import { useState } from "react";

function App () {
  const [count, setCount] = useState(0);

  const decrement = () => setCount((prevCount) => prevCount - 1);
  const increment = () => setCount((prevCount) => prevCount + 1);

  return (
    <div className="App">
      <h2><em>Counter</em></h2>
  
      <Counter count={count} increment={increment} decrement={decrement}/>

      <br />
      <h2><em>Exponents</em></h2>

      <div className="container">
        <Exponents count={count} exponent={2} />
        <Exponents count={count} exponent={3} />
        <Exponents count={count} exponent={4} />
        <Exponents count={count} exponent={5} />
        <Exponents count={count} exponent={6} />
      </div>
    </div>
  );
}

export default App;
