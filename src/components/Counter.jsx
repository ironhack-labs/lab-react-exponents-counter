import { useState } from "react";

const Counter = (prop) => {
  



  return (
    <div className="counter-container">
      <p className="counter-value">{prop.num}</p>
      <button className="counter-button" onClick={prop.minus}>-</button>
      <button className="counter-button" onClick={prop.plus}>+</button>
    </div>
  );
};

export default Counter;
