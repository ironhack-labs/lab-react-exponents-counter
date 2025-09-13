const ExponentTwo = () => (
  <div className="exponent-counter-container">
    <p className="exponent-label">n²</p>
    <p className="exponent-result">
      {value}²= <span className="total">{value ** 2}</span>
    </p>
  </div>
);

export default ExponentTwo;
