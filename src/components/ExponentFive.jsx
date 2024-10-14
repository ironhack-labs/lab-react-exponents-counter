const ExponentFive = ({ counter }) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">n⁵</p>
    <p className="exponent-result">
      {counter} * {counter} * {counter} * {counter} * {counter} ={" "}
      <span className="total">{counter ** 5}</span>
    </p>
  </div>
);

export default ExponentFive;
