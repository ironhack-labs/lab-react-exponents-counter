import React from "react";

const ExponentFour = (props) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">
      {props.counter}
      <sub>4</sub>
    </p>
    <p className="exponent-result">
      {props.counter} * {props.counter} * {props.counter} * {props.counter} ={" "}
      <span className="total">{props.counter ** 4}</span>
    </p>
  </div>
);

export default ExponentFour;
