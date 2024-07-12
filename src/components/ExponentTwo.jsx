{
  /*const ExponentTwo = () => (
   <div className="exponent-counter-container">
    <p className="exponent-label">n²</p>
    <p className="exponent-result">2 * 2 = <span className="total">4</span></p>
  </div>
);

export default ExponentTwo;


import React from 'react';*/
}

const ExponentTwo = ({ count }) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">n²</p>
    <p className="exponent-result">
      {count}² = <span className="total">{count * count}</span>
    </p>
  </div>
);

export default ExponentTwo;
