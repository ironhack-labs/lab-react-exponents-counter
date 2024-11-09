const ExponentThree = ({ count }) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">
      3<sup>{count}</sup>
    </p>
    <p className="exponent-result">
      3<sup>{count}</sup> = <span className="total">{Math.pow(3, count)}</span>
    </p>
  </div>
);

export default ExponentThree;
