import React from "react";

const ExponentSix = ({ count }) => {
  const result = Math.pow(count, 6);

  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">
        n<sup>6</sup>
      </p>
      <p className="exponent-result">
        {`${count} * ${count} * ${count} * ${count} * ${count} * ${count} = `}
        <span className="total">{result}</span>
      </p>
    </div>
  );
};

export default ExponentSix;
