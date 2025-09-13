const ExponentFive = () => (
  <div className="exponent-counter-container">
    <p className="exponent-label">n⁵</p>
    <p className="exponent-result">
      {value}⁵ = <span className="total">{value}**5</span>
    </p>
  </div>
);

export default ExponentFive;
