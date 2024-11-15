import React from "react";

const Exponent = ({num , exponent}) => {
  return (
   <div className="exponent-counter-container">
    <p className="exponent-label">{num}^{exponent}</p>
    <p className="exponent-result">{`${num} * `.repeat(exponent).slice(0,-2)} = <span className="total">{Math.pow(num, exponent)}</span></p>
  </div>
  );
};

export default Exponent;