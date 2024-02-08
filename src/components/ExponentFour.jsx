

import React from "react";

const ExponentFour = (props) => (
   <div className="exponent-counter-container">
    <p className="exponent-label"> {props.count}⁴</p>
    <p className="exponent-result">2 * 2 * 2 * 2 = <span className="total">16</span></p>
  </div>
);

export default ExponentFour;