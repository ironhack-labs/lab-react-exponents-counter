import React from "react";

const ExponentThree = ({ count }) => {
  const exponent = Math.pow(count, 3); // Corrected to calculate count^3
  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">{count}³</p>
      <p className="exponent-result">
        {count} * {count} * {count} = <span className="total">{exponent}</span>
      </p>
    </div>
  );
};

export default ExponentThree;
