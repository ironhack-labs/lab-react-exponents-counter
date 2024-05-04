import React from 'react';

const ExponentTwo = ({ count }) => {

  const exponent = count * count
  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">n²</p>
      <p className="exponent-result">{count} * {count} = <span className="total">{exponent}</span></p>
    </div>
  )
};

export default ExponentTwo;