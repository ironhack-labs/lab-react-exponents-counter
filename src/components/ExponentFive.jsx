import { displayOperation } from "../utils/displayOperation";

const ExponentFive = ({ count }) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">{count != 0 ? count : "n"}⁵</p>
    <p className="exponent-result">
      {displayOperation(count)}
      <span className="total">{count !== 0 ? Math.pow(count, 5) : 32}</span>
    </p>
  </div>
);

export default ExponentFive;
