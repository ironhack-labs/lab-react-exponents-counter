{
  /*const ExponentThree = () => (
   <div className="exponent-counter-container">
    <p className="exponent-label">n³</p>
    <p className="exponent-result">2 * 2 * 2 = <span className="total">8</span></p>
  </div>

  export default ExponentThree;
);*/
}

import React from "react";

const ExponentThree = ({ count }) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">n³</p>
    <p className="exponent-result">
      {count}³ = <span className="total">{count * count * count}</span>
    </p>
  </div>
);

export default ExponentThree;
