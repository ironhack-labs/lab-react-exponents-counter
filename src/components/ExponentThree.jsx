const ExponentThree = ({ counter }) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">n³</p>
    <p className="exponent-result">
      {counter} * {counter} * {counter} ={" "}
      <span className="total">{counter ** 3}</span>
    </p>
  </div>
);

export default ExponentThree;
