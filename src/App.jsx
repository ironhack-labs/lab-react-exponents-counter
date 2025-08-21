import "./App.css";
import { useState } from "react";
import Exponent from "./components/Exponent";
import Counter from "./components/Counter";


function App () {
  const [count,setCount] = useState(0)
  
  const decrement = () => setCount((prevCount) => prevCount - 1);
  const increment = () => setCount((prevCount) => prevCount + 1);

  return (
    <div className="App">
      <h2><em>Counter</em></h2>
  
      <Counter count={count} increment={increment} decrement={decrement}/>

      <br />
      <h2><em>Exponents</em></h2>

      <div className="container">
        <Exponent num={count} exp={2}/>
        <Exponent num={count} exp={3}/>
        <Exponent num={count} exp={4}/>
        <Exponent num={count} exp={5}/>
        <Exponent num={count} exp={6}/>
      </div>
    </div>
  );
}

export default App;
