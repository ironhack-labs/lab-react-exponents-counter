const ExponentTwo = ({ count }) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">²</p>
    <p className="exponent-result">
      {count} ^2 = <span className="total">{count ** 2}</span>
    </p>
  </div>
);

export default ExponentTwo;
