import React from "react";

const ExponentThree = ({ count }) => {
  const exponentResult = Math.pow(count, 3);

  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">{count}³</p>
      <p className="exponent-result">
        {count} * {count} * {count} ={" "}
        <span className="total">{exponentResult}</span>
      </p>
    </div>
  );
};

export default ExponentThree;
