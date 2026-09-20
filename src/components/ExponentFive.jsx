const ExponentFive = ({ count }) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">n⁵</p>
    <p className="exponent-result">{Array(5).fill(count).join(" * ")} = <span className="total">{count ** 5}</span></p>
  </div>
);

export default ExponentFive;
