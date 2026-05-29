import { useState } from "react";

const Counter = (pops) => {
  // const [count, setCount] = useState(0);

  // const decrement = () => setCount((prevCount) => prevCount - 1);
  // const increment = () => setCount((prevCount) => prevCount + 1);

  return (
    <div className="counter-container">
      <p className="counter-value">{pops.count}</p>
      <button className="counter-button" onClick={pops.decrement}>-</button>
      <button className="counter-button" onClick={pops.increment}>+</button>
    </div>
  );
};

export default Counter;
