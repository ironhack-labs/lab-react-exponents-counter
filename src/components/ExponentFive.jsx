const ExponentFive = ({ value }) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">n⁵</p>
    <p className="exponent-result">
      {value} * {value} * {value} * {value} * {value} ={" "}
      <span className="total">{value ** 5}</span>
    </p>
  </div>
);

export default ExponentFive;
