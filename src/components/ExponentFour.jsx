

import React from "react";

const ExponentFour = (props) => { 

return (
  <div className="exponent-counter-container">
    <p className="exponent-label">{props.count}⁴ </p>
    <p className="exponent-result">
      {props.count} * {props.count} * {props.count} * {props.count}  ={" "}
      <span className="total">{props.calculateExponent(props.count, 4)}</span>
    </p>
  </div>
)

  };


export default ExponentFour;