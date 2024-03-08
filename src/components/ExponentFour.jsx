// ExponentFour.jsx
import React, { useContext } from "react";
import { CounterContext } from "./CounterContext.jsx";

const ExponentFour = () => {
  const { count } = useContext(CounterContext);
  const exponentFour = Math.pow(count, 2);

  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">n²</p>
      <p className="exponent-result">
        {count}² = <span className="total">{exponentFour}</span>
      </p>
    </div>
  );
};

export default ExponentFour;
