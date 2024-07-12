{
  /*const ExponentFive = () => (
  <div className="exponent-counter-container">
    <p className="exponent-label">n⁵</p>
    <p className="exponent-result">2 * 2 * 2 * 2 * 2 = <span className="total">32</span></p>
  </div>
);

export default ExponentFive;*/
}

import React from "react";

const ExponentFive = ({ count }) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">n⁵</p>
    <p className="exponent-result">
      {count}⁵ = <span className="total">{Math.pow(count, 5)}</span>
    </p>
  </div>
);

export default ExponentFive;
