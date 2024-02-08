import React from "react"

const Counter = (props) => {

  return (
    <div className="counter-container">
      <p className="counter-value">{props.count}</p>
      <button className="counter-button" onClick= {() => props.decrement(props.count)}>-</button>
      <button className="counter-button" onClick={() => props.increment(props.count)}>+</button>
    </div>
  );
};

export default Counter;
