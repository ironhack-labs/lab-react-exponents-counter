const ExponentFour = ({ count }) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">n⁴</p>
    <p className="exponent-result">{Array(4).fill(count).join(" * ")} = <span className="total">{count ** 4}</span></p>
  </div>
);

export default ExponentFour;
