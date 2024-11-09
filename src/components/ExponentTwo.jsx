const ExponentTwo = ({ count }) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">
      2<sup>{count}</sup>
    </p>
    <p className="exponent-result">
      2<sup>{count}</sup> = <span className="total">{Math.pow(2, count)}</span>
    </p>
  </div>
);

export default ExponentTwo;
