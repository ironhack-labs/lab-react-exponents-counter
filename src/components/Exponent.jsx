import React from 'react';

const Exponent = ({ num, exponent }) => {
  const result = Math.pow(num, exponent);

  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">{`n^${exponent}`}</p>
      <p className="exponent-result">
        {num} <sup>{exponent}</sup> = <span className="total">{result}</span>
      </p>
    </div>
  );
};

export default Exponent;
