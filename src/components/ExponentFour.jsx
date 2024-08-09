import React from "react"

const ExponentFour = ({ count }) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">{count}⁴</p>
    <p className="exponent-result">
      {count} * {count} * {count} * {count} =
      {Math.pow(count, 4)}</p>
  </div>
);

export default ExponentFour;