const ExponentFour = () => (
  <div className="exponent-counter-container">
    <p className="exponent-label">n⁴</p>
    <p className="exponent-result">
      {value}⁴ = <span className="total">{value}**4</span>
    </p>
  </div>
);

export default ExponentFour;
