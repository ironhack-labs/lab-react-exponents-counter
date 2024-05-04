import React from "react";

function Exponent(props) {
    const exponentiation = props.num ** props.exponent
  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">{props.num}^{props.exponent}</p>
      <p className="exponent-result">
        {props.num} * {props.num} * {props.num} * {props.num} *{" "}
        {props.num} = <span className="total">{exponentiation}</span>
      </p>
    </div>
  );
}

export default Exponent;
