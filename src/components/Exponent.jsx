import React from 'react';

const Exponent = (num, exponent) => {
    return (

        <div className="exponent-counter-container"> Exponent
            <p className="exponent-label">{num}^{exponent}</p>
            <p className="exponent-result">{num}*{num} = <span className="total">{num ** exponent}</span></p>
        </div>
    );
};

export default Exponent;

/*

import React from "react";

const Exponent = ({ num, exponent }) => {
  // Calculate the result
  const result = Math.pow(num, exponent);

  // Generate the multiplication string dynamically
  const multiplicationString = Array(exponent).fill(num).join(" * ");

  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">
        {num}
        <sup>{exponent}</sup>
      </p>
      <p className="exponent-result">
        {multiplicationString} = <span className="total">{result}</span>
      </p>
    </div>
  );
};

export default Exponent;
*/ 