import React from "react";
const ExponentThree = ({ count }) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">
      {count}
      <sup>3</sup>
    </p>
    <p className="exponent-result">
      {count} * {count} * {count} ={" "}
      <span className="total">{count * count * count}</span>
    </p>
  </div>
);

export default ExponentThree;
