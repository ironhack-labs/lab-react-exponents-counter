import React from "react";
  const ExponentTwo = ({number}) => {
    const result = Math.pow(number, 2);
    const multiplicationString = Array(2).fill(number).join(' * '); 
    return (
      <div className="exponent-counter-container">
        <p className="exponent-label">{number}<sup>2</sup></p>
        <p className="exponent-result">
          {multiplicationString} = <span className="total">{result}</span>
        </p>
      </div>
  );
  };

export default ExponentTwo;