
import React from "react";

const ExponentTwo = (props) => { 

  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">{props.count}² </p>
      <p className="exponent-result">
        {props.count} * {props.count}  ={" "}
        <span className="total">{props.calculateExponent(props.count, 2)}</span>
      </p>
    </div>
  )
  
    };
  

export default ExponentTwo;