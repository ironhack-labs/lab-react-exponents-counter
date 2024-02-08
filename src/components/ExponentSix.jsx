
import React from "react";

const ExponentSix = (props) => { 

  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">{props.count}⁶ </p>
      <p className="exponent-result">
        {props.count} * {props.count} * {props.count} * {props.count} * {props.count} * {props.count}  ={" "}
        <span className="total">{props.calculateExponent(props.count, 6)}</span>
      </p>
    </div>
  )
  
    };
export default ExponentSix;