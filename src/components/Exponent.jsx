import { displayOperation } from "../utils/displayOperation";

const Exponent = ({ number, exponent }) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">
      {number != 0 ? number : "n"}
      <sup>{exponent}</sup>
    </p>
    <p className="exponent-result">
      {displayOperation(number, exponent)}
      <span className="total">{Math.pow(number, exponent)}</span>
    </p>
  </div>
);

export default Exponent;
