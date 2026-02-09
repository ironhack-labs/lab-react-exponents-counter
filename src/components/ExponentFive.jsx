const ExponentFive = ({ number }) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">n⁵</p>
    <p className="exponent-result">
      {number}⁵ = <span className="total">{number ** 5}</span>
    </p>
  </div>
);

export default ExponentFive;
