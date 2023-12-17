import { useState } from "react";

const Counter = ({ increment , count, decrement }) => {
  //const [count, setCount] = useState(0);

  
  return (
    <div className="counter-container">
    <p className="counter-value">{count}</p>
    <button className="counter-button" onClick={decrement}>-</button>
    <button className="counter-button" onClick={increment}>+</button>
  </div>
  );
};

export default Counter;
