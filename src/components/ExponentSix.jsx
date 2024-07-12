import React from "react";

const ExponentSix = ({ count }) => {
  const exponent = Math.pow(count, 6); // Corrected to calculate count^3
  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">{count}⁶</p>
      <p className="exponent-result">
        {count} * {count} * {count} * {count} * {count} * {count} ={" "}
        <span className="total">{exponent}</span>
      </p>
    </div>
  );
};

export default ExponentSix;
