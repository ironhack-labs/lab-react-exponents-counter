const ExponentFour = ({ count }) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">
      4<sup>{count}</sup>
    </p>
    <p className="exponent-result">
      4<sup>{count}</sup> = <span className="total">{Math.pow(4, count)}</span>
    </p>
  </div>
);

export default ExponentFour;
