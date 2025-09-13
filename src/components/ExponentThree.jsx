const ExponentThree = () => (
  <div className="exponent-counter-container">
    <p className="exponent-label">n³</p>
    <p className="exponent-result">
      {value}³ = <span className="total">{value}**3</span>
    </p>
  </div>
);

export default ExponentThree;
