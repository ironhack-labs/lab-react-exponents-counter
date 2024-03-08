// ExponentFive.jsx
import React, { useContext } from "react";
import { CounterContext } from "./CounterContext.jsx";

const ExponentFive = () => {
  const { count } = useContext(CounterContext);
  const exponentFive = Math.pow(count, 2);

  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">n²</p>
      <p className="exponent-result">
        {count}² = <span className="total">{exponentFive}</span>
      </p>
    </div>
  );
};

export default ExponentFive;
