import "./App.css";
import Counter from "./components/Counter";
import { useState } from "react";
import NewExponent from "./components/NewExponent";


function App () {

  const [count, setCount] = useState(0);

  const decrement = () => setCount((prevCount) => prevCount - 1);
  const increment = () => setCount((prevCount) => prevCount + 1);

  const num = [ 1, 2, 3, 4, 5, 6]

  return (
    <div className="App">
      <h2><em>Counter</em></h2>
  
      <Counter count={count} decrement={decrement} increment={increment}/>

      <br />
      <h2><em>Exponents</em></h2>

      <div className="container">

      {
        num.map((num, index)=>{
          return <NewExponent key={index} count={count} num={num}/>
        })
      }
      </div>
    </div>
  );
}

export default App;
