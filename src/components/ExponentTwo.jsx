import React from "react";

const ExponentTwo = ({ count }) => {
  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">n²</p>
      <p className="exponent-result">{count}² = {count ** 2}</p>
    </div>
  );
};

export default ExponentTwo;
