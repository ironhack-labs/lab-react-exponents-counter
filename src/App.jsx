import "./App.css";
import {useState} from 'react';

import Counter from "./components/Counter";
import Exponent from "./components/Exponent";


function App () {

  const [count, setCount] = useState(0);

  const decrement = () => setCount(count - 1);
  const increment = () => setCount(count + 1);


  return (
    <div className="App">
      <h2><em>Counter</em></h2>
  
      <Counter increment={increment} decrement={decrement} count={count} setCount={setCount}/>

      <br />
      <h2><em>Exponents</em></h2>

      <div className="container">
        <Exponent count={count} exponent={2}/>
        <Exponent count={count} exponent={3}/>
        <Exponent count={count} exponent={4}/>
        <Exponent count={count} exponent={5}/>
        <Exponent count={count} exponent={6}/>
      </div>
    </div>
  );
}

export default App;
