import "./App.css";
import Counter from "./components/Counter";
import ExponentTwo from "./components/ExponentTwo";
import ExponentThree from "./components/ExponentThree";
import ExponentFour from "./components/ExponentFour";
import ExponentFive from "./components/ExponentFive";
import ExponentSix from "./components/ExponentSix";
import { useState } from "react";
import Exponent from "./components/Exponent";


function App () {
  const [count, setCount] = useState(0);

  const decrement = () => setCount((prevCount) => prevCount - 1);
  const increment = () => setCount((prevCount) => prevCount + 1);


  const [ exp2 , setExp2 ] = useState("")
  const [ exp3 , setExp3 ] = useState("")
  const [ exp4 , setExp4 ] = useState("")
  const [ exp5 , setExp5 ] = useState("")
  const [ exp6 , setExp6 ] = useState("")

  return (
    <div className="App">
      <h2><em>Counter</em></h2>
      
      <Counter
      count={count}
      decrement={decrement}
      increment={increment}
      />

      <br />
      <h2><em>Exponents</em></h2>

      <div className="container">
        <Exponent n={count} exp={2} />
        <Exponent n={count} exp={3} />
        <Exponent n={count} exp={4} />
        <Exponent n={count} exp={5} />
        <Exponent n={count} exp={6} />
      </div>
    </div>
  );
}

export default App;
