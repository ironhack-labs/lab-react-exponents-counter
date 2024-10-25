import React from "react";
const ExponentFour = ({number}) => {
  const result = Math.pow(number, 4);
  const multiplicationString = Array(4).fill(number).join(' * '); 
  return (
    <div className="exponent-counter-container">
      <p className="exponent-label"><sup>4</sup></p>
      <p className="exponent-result">
        {multiplicationString} = <span className="total">{result}</span>
      </p>
    </div>
);
};

export default ExponentFour;