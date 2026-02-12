import { useState } from "react"; 
import "./App.css";
import Counter from "./components/Counter";
import Exponent from "./components/Exponent";


function App () {

  //state for Counter component
  const [counter, setCounter] = useState(0);

  //logic in app
  const decrement = () => {
    setCounter(counter - 1);
  }
  const increment = () => {
    setCounter(counter + 1);
  };
  return (
    <div className="App">
      <h2><em>Counter</em></h2>

      {/* passing state and functions as props to Counter component */} 
      <Counter count={counter} decrement={decrement} increment={increment} />

      <br />
      <h2><em>Exponents</em></h2>

      <div className="container">
        {/* passing state as props to Exponent components */}
        <Exponent num={counter} exponent={2} />
        <Exponent num={counter} exponent={3} />
        <Exponent num={counter} exponent={4} />
        <Exponent num={counter} exponent={5} />
        <Exponent num={counter} exponent={6} />
      </div>
    </div>
  );
}

export default App;
