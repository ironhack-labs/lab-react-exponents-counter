import React from "react";

const ExponentTwo = (props) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">{props.counter}<sub>2</sub></p>
    <p className="exponent-result">
      {props.counter} * {props.counter} ={" "}
      <span className="total">{props.counter ** 2}</span>
    </p>
  </div>
);

export default ExponentTwo;
