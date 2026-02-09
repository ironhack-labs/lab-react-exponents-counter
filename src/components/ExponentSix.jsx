const ExponentSix = ({ number }) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">n⁶</p>
    <p className="exponent-result">
      {number}⁶ = <span className="total">{number ** 6}</span>
    </p>
  </div>
);

export default ExponentSix;
