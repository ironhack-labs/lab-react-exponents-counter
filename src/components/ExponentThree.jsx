import React from "react";
  const ExponentThree = ({number}) => {
    const result = Math.pow(number, 3);
    const multiplicationString = Array(3).fill(number).join(' * '); 
    return (
      <div className="exponent-counter-container">
        <p className="exponent-label">{number}<sup>3</sup></p>
        <p className="exponent-result">
          {multiplicationString} = <span className="total">{result}</span>
        </p>
      </div>
  );
  };
  
export default ExponentThree;