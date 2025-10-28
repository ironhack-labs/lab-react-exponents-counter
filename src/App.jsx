// App.jsx
import { useState } from "react";
import Counter from "./components/Counter";
import ExponentTwo from "./components/ExponentTwo";
import ExponentThree from "./components/ExponentThree";
import ExponentFour from "./components/ExponentFour";
import ExponentFive from "./components/ExponentFive";
import ExponentSix from "./components/ExponentSix";

import Exponent from "./components/Exponent";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <>
      <Counter count={count} increment={increment} decrement={decrement} />

      <Exponent num={count} exponent={2} />
      <Exponent num={count} exponent={3} />
      <Exponent num={count} exponent={4} />
      <Exponent num={count} exponent={5} />
      <Exponent num={count} exponent={6} />
    </>
  );
}




export default App;
