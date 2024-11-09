const ExponentFive = ({ count }) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">
      5<sup>{count}</sup>
    </p>
    <p className="exponent-result">
      5<sup>{count}</sup> = <span className="total">{Math.pow(5, count)}</span>
    </p>
  </div>
);

export default ExponentFive;
