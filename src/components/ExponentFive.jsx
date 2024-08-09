import React from "react"

const ExponentFive = ({ count }) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">{count}⁵</p>
    <p className="exponent-result">
      {count} * {count} * {count} * {count} * {count} =
      {Math.pow(count, 5)}</p>
  </div>
);

export default ExponentFive;