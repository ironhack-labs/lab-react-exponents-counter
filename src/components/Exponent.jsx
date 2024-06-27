import React from "react";

const Exponent = ({ num, exponent }) => {
  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">{`n${exponent}`}</p>
      <p className="exponent-result">{num}^{exponent} = {Math.pow(num, exponent)}</p>
    </div>
  );
};

export default Exponent;
