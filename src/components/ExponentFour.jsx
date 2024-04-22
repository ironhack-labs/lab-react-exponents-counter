import React from "react";

const ExponentFour = ({ count }) => {
  const exponentResult = Math.pow(count, 4);
  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">{count}⁴</p>
      <p className="exponent-result">
        {count} * {count} * {count} * {count} ={" "}
        <span className="total">{exponentResult}</span>
      </p>
    </div>
  );
};
export default ExponentFour;
