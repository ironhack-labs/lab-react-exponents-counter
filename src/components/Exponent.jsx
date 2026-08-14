import React from "react";

function Exponent({ num, exponent }) {
  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">
        {num}**{exponent}
      </p>
      <p className="exponent-result">
        Result ={" "} <span className="total">{num ** exponent}</span>
      </p>
    </div>
  );
}

export default Exponent;
