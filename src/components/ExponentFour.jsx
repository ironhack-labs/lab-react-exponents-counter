const ExponentFour = ({ count }) => (
  <div className="exponent-counter-container">
    <h2>
      {count}^2 = {Math.pow(count, 2)}
    </h2>
    <p className="exponent-label">n⁴</p>
    <p className="exponent-result">
      2 * 2 * 2 * 2 = <span className="total">16</span>
    </p>
  </div>
);

export default ExponentFour;
