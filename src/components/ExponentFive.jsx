import React from "react";

const ExponentFive = (props) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">
      {props.counter}
      <sub>5</sub>
    </p>
    <p className="exponent-result">
      {props.counter} * {props.counter} * {props.counter} * {props.counter} *{" "}
      {props.counter} = <span className="total">{props.counter ** 5}</span>
    </p>
  </div>
);

export default ExponentFive;
