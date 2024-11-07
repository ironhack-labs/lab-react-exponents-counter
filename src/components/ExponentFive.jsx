const ExponentFive = ({ count }) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">⁵</p>
    <p className="exponent-result">
      {" "}
      {count} ^5 = <span className="total">{count ** 5}</span>
    </p>
  </div>
);

export default ExponentFive;
