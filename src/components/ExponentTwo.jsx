const ExponentTwo = ({ number }) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">n²</p>
    <p className="exponent-result">
      {number} × {number} = <span className="total">{number ** 2}</span>
    </p>
  </div>
);

export default ExponentTwo;

