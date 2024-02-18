import { useState } from "react";

const Counter = (props) => {

  return (
    <div className="counter-container">
      <p className="counter-value">{props.sendCount}</p>
      <button className="counter-button" onClick={props.activateDecrement}>-</button>
      <button className="counter-button" onClick={props.activateIncrement}>+</button>
    </div>
  );
};

export default Counter;
