import React from "react";
const ExponentTwo = ({ count }) => {
  const exponResult = count * count;
  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">n²</p>
      <p className="exponent-result">
        2 * 2 = <span className="total">{exponResult}</span>
      </p>
    </div>
  );
};
export default ExponentTwo;
