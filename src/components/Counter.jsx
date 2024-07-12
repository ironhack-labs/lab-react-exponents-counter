import React from "react";

const Counter = ({ count, increment, decrement }) => (
  <div className="counter-container">
    <p className="counter-value">{count}</p>
    <button className="counter-button1" onClick={decrement}>
      -
    </button>
    <button className="counter-button2" onClick={increment}>
      +
    </button>
  </div>
);

export default Counter;
