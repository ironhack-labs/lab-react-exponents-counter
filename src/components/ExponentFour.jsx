const ExponentFour = ({ number }) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">n⁴</p>
    <p className="exponent-result">
      {number}⁴ = <span className="total">{number ** 4}</span>
    </p>
  </div>
);

export default ExponentFour;
