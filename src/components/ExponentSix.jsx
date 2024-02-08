import React from "react";

const ExponentSix = (props) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">
      {props.counter}
      <sub>6</sub>
    </p>
    <p className="exponent-result">
      {props.counter} * {props.counter} * {props.counter} * {props.counter} *{" "}
      {props.counter} * {props.counter} ={" "}
      <span className="total">{props.counter ** 6}</span>
    </p>
  </div>
);

export default ExponentSix;
