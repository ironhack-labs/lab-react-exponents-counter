const ExponentTwo = ({ count }) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">n²</p>
    {count} = <span className="total">{count ** 3}</span>
  </div>
);

export default ExponentTwo;
