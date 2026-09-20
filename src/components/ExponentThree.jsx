const ExponentThree = ({ count }) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">n³</p>
    <p className="exponent-result">{Array(3).fill(count).join(" * ")} = <span className="total">{count ** 3}</span></p>
  </div>
);

export default ExponentThree;
