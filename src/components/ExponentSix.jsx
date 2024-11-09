const ExponentSix = ({ count }) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">
      6<sup>{count}</sup>
    </p>
    <p className="exponent-result">
      6<sup>{count}</sup> = <span className="total">{Math.pow(6, count)}</span>
    </p>
  </div>
);

export default ExponentSix;
