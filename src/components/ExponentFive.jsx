import React from "react";
const ExponentFive = ({ number }) => {
  const result = Math.pow(number, 5);
  const multiplicationString = Array(5).fill(number).join(' * '); 
  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">{number}<sup>5</sup></p>
      <p className="exponent-result">
        {multiplicationString} = <span className="total">{result}</span>
      </p>
    </div>
);
};

export default ExponentFive;

