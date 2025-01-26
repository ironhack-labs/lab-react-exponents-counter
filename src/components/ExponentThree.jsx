const ExponentThree = ({ count }) => (
  <div className="exponent-counter-container">
    <h2>
      {count}^2 = {Math.pow(count, 2)}
    </h2>
    <p className="exponent-label">n³</p>
    <p className="exponent-result">
      2 * 2 * 2 = <span className="total">8</span>
    </p>
  </div>
);

export default ExponentThree;
