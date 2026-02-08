const ExponentSix = ({ count }) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">n⁶</p>
    <p className="exponent-result">
      {count}⁶ = <span className="total">{count ** 6}</span>
    </p>
  </div>
);

export default ExponentSix;
