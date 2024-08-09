import React from "react"

const ExponentTwo = ({ count }) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">{count}²</p>
    <p className="exponent-result">
      {count} * {count} = {Math.pow(count, 2)}</p>
  </div>
);

export default ExponentTwo;

