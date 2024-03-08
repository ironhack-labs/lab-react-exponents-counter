// ExponentThree.jsx
import React, { useContext } from "react";
import { CounterContext } from "./CounterContext.jsx";

const ExponentThree = () => {
  const { count } = useContext(CounterContext);
  const exponentThree = Math.pow(count, 2);

  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">n²</p>
      <p className="exponent-result">
        {count}² = <span className="total">{exponentThree}</span>
      </p>
    </div>
  );
};

export default ExponentThree;
