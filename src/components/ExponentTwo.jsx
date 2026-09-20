const ExponentTwo = ({ count }) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">n²</p>
    <p className="exponent-result">{Array(2).fill(count).join(" * ")} = <span className="total">{count ** 2}</span></p>
  </div>
);

export default ExponentTwo;
