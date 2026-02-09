const ExponentTwo = ({ count }) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">{count}</p>
    <p className="exponent-result">
      {count} * {count} = <span className="total">{Number(count) ** 2}</span>
    </p>
  </div>
);

export default ExponentTwo;
