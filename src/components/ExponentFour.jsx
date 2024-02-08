import React from 'react';

const ExponentFour = ({ count }) => {
  const fourthPower = count ** 4;

  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">n⁴</p>
      <p className="exponent-result">{count} * {count} * {count} * {count} = <span className="total">{fourthPower}</span></p>
    </div>
  );
};

export default ExponentFour;
