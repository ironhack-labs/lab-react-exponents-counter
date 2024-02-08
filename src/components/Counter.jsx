//import { useState } from "react"; LIFTED UP

const Counter = ({ count, decrement, increment }) => {
  //const [count, setCount] = useState(0);  LIFTED UP

  //const decrement = () => setCount((prevCount) => prevCount - 1);   LIFTED UP
  //const increment = () => setCount((prevCount) => prevCount + 1);   LIFTED UP

  return (
    <div className="counter-container">
      <p className="counter-value">{count}</p>
      <button className="counter-button" onClick={decrement}>
        -
      </button>
      <button className="counter-button" onClick={increment}>
        +
      </button>
    </div>
  );
};

export default Counter;
