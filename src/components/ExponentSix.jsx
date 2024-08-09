import React from "react"

const ExponentSix = ({ count }) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">{count}⁶</p>
    <p className="exponent-result">
      {count} * {count} * {count} * {count} * {count} * {count} =
      {Math.pow(count, 6)}</p>
  </div>
);

export default ExponentSix;