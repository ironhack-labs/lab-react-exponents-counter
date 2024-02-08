import React from 'react';

const ExponentThree = ({ count }) => {
  const cubed = count ** 3;

  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">n³</p>
      <p className="exponent-result">{count} * {count} * {count} = <span className="total">{cubed}</span></p>
    </div>
  );
};

export default ExponentThree;