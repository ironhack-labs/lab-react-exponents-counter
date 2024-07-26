import { useState } from "react";
const ExponentFive = ({ count, decrement, increment }) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">n⁵</p>
    <p className="exponent-result">{count} * {count} * {count} * {count} * {count} = <span className="total">{count * count * count  * count * count}</span></p>
  </div>
);

export default ExponentFive;