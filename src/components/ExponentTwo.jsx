import React from "react";

const ExponentTwo = ({ count }) => {
  const exponent = Math.pow(count, 2); // Corrected to calculate count^3
  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">{count}²</p>
      <p className="exponent-result">
        {count} * {count} = <span className="total">{exponent}</span>
      </p>
    </div>
  );
};

export default ExponentTwo;
