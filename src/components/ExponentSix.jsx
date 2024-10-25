
  import React from "react";
  const ExponentSix = ({number}) => {
    const result = Math.pow(number, 6);
    const multiplicationString = Array(6).fill(number).join(' * '); 
    return (
      <div className="exponent-counter-container">
        <p className="exponent-label"><sup>6</sup></p>
        <p className="exponent-result">
          {multiplicationString} = <span className="total">{result}</span>
        </p>
      </div>
  );
  };

export default ExponentSix;