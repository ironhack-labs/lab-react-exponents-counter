{
  /*const ExponentSix = () => (
  <div className="exponent-counter-container">
    <p className="exponent-label">n⁶</p>
    <p className="exponent-result">2 * 2 * 2 * 2 * 2 * 2 = <span className="total">64</span></p>
  </div>
);

export default ExponentSix;*/
}

import React from "react";

const ExponentSix = ({ count }) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">n⁶</p>
    <p className="exponent-result">
      {count}⁶ = <span className="total">{Math.pow(count, 6)}</span>
    </p>
  </div>
);

export default ExponentSix;
