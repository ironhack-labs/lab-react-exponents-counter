// ExponentSix.jsx
import React, { useContext } from "react";
import { CounterContext } from "./CounterContext.jsx";

const ExponentSix = () => {
  const { count } = useContext(CounterContext);
  const exponentSix = Math.pow(count, 2);

  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">n²</p>
      <p className="exponent-result">
        {count}² = <span className="total">{exponentSix}</span>
      </p>
    </div>
  );
};

export default ExponentSix;
