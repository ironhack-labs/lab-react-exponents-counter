import React from "react";

const ExponentThree = ({ count }) => {
  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">n³</p>
      <p className="exponent-result">{count}³ = {count ** 3}</p>
    </div>
  );
};

export default ExponentThree;
