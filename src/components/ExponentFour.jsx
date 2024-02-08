import React from "react";

const ExponentFour = (props) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">n⁴</p>
    <p className="exponent-result">
      2 * 2 * 2 * 2 ={" "}
      <span className="total">{props.counter * props.counter}</span>
    </p>
  </div>
);

export default ExponentFour;
