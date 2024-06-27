import React from "react";

const ExponentFive = ({ count }) => {
  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">n⁵</p>
      <p className="exponent-result">{count}⁵ = {count ** 5}</p>
    </div>
  );
};

export default ExponentFive;
