import React from "react";

const ExponentSix = ({ count }) => {
  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">n⁶</p>
      <p className="exponent-result">{count}⁶ = {count ** 6}</p>
    </div>
  );
};

export default ExponentSix;
