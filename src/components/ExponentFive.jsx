import React from "react";

const ExponentFive = ({ count }) => {
  const exponent = Math.pow(count, 5); // Corrected to calculate count^3
  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">{count}⁵</p>
      <p className="exponent-result">
        {count} * {count} * {count} * {count} * {count} ={" "}
        <span className="total">{exponent}</span>
      </p>
    </div>
  );
};

export default ExponentFive;
