import React from "react";

const ExponentTwo = ({ count }) => {
  const exponentResult = Math.pow(count, 2);

  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">{count}²</p>
      <p className="exponent-result">
        {count} * {count} = <span className="total">{exponentResult}</span>
      </p>
    </div>
  );
};

export default ExponentTwo;
