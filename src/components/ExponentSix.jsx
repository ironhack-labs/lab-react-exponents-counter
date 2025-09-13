const ExponentSix = () => (
  <div className="exponent-counter-container">
    <p className="exponent-label">n⁶</p>
    <p className="exponent-result">
      {value}⁶ = <span className="total">{value}**6</span>
    </p>
  </div>
);

export default ExponentSix;
