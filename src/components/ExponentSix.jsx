const ExponentSix = ({ count }) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">n⁶</p>
    <p className="exponent-result">{Array(6).fill(count).join(" * ")} = <span className="total">{count ** 6}</span></p>
  </div>
);

export default ExponentSix;
