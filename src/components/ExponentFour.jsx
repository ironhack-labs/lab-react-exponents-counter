import React from "react";

const ExponentFour = ({ count }) => {
  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">n⁴</p>
      <p className="exponent-result">{count}⁴ = {count ** 4}</p>
    </div>
  );
};

export default ExponentFour;
