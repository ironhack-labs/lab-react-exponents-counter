import { useState } from "react";

const Counter = ({ count, onIncrement, onDecrement }) => {
  // const [count, setCount] = useState(0);

  // const decrement = () => setCount((prevCount) => prevCount - 1);
  // const increment = () => setCount((prevCount) => prevCount + 1);

  return (
    <div className="counter-container">
      <p className="counter-value">{count}</p>
      <button className="counter-button" onClick={onDecrement}>-</button>
      <button className="counter-button" onClick={onIncrement}>+</button>
    </div>
  );
};

export default Counter;
