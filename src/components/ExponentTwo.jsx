const ExponentTwo = ({ counter }) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">n²</p>
    <p className="exponent-result">
      {counter} * {counter} = <span className="total">{counter * counter}</span>
    </p>
  </div>
);

export default ExponentTwo;
