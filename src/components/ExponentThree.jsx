import React from "react";

const ExponentThree = (props) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">
      {props.counter}
      <sub>3</sub>
    </p>
    <p className="exponent-result">
      {props.counter} * {props.counter} * {props.counter} ={" "}
      <span className="total">{props.counter ** 3}</span>
    </p>
  </div>
);

export default ExponentThree;
