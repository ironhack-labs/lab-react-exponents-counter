import React from "react";

const ExponentThree = (props) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">n³</p>
    <p className="exponent-result">
      2 * 2 * 2 = <span className="total">{props.counter * props.counter}</span>
    </p>
  </div>
);

export default ExponentThree;
