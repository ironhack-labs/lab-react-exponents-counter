import "./App.css";
import Counter from "./components/Counter";

import { useState } from "react";
import Exponents from "./components/Exponents"


function App () {

  const [count, setCount] = useState(0);
  
 
  const decrement = () => setCount((prevCount) => prevCount - 1);
  const increment = () => setCount((prevCount) => prevCount + 1);



  return (
    <div className="App">
      <h2><em>Counter</em></h2>
  
      <Counter count={count} setCount={setCount} increment={increment} decrement={decrement}/>

      <br />
      <h2><em>Exponents</em></h2>

      <div className="container">
        <Exponents count={count}/>
      </div>
    </div>
  );
}

export default App;
