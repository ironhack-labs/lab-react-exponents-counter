import React from "react";


const ExponentThree = (props) => (
   <div className="exponent-counter-container">
    <p className="exponent-label">{props.count}³</p>
    <p className="exponent-result">2 * 2 * 2 = <span className="total">8</span></p>
  </div>
);

export default ExponentThree;