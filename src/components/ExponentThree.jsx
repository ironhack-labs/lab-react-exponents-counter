const ExponentThree = ({ number }) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">n³</p>
    <p className="exponent-result">
      {number}³ = <span className="total">{number ** 3}</span>
    </p>
  </div>
);

export default ExponentThree;
