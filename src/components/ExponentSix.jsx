import React from 'react';

const ExponentSix = ({ count }) => {
  const sixthPower = count ** 6;

  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">n⁶</p>
      <p className="exponent-result">{count} * {count} * {count} * {count} * {count} * {count} = <span className="total">{sixthPower}</span></p>
    </div>
  );
};

export default ExponentSix;
