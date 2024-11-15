import React from "react";

const Exponenent = ({ num, exponenent }) => {
  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">
        {num} ^{exponenent}
      </p>
      <p className="exponent-result">
        {num} * {num} = <span className="total">{num ** exponenent}</span>
      </p>
    </div>
  );
};

export default Exponenent;
