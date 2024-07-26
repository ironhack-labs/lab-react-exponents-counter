import { useState } from "react";
const ExponentThree = ({ count, decrement, increment }) => (
   <div className="exponent-counter-container">
    <p className="exponent-label">n³</p>
    <p className="exponent-result">{count} * {count} * {count} = <span className="total">{count  * count * count}</span></p>
  </div>
);

export default ExponentThree;