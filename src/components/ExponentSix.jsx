const ExponentSix = ({ counter }) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">n⁶</p>
    <p className="exponent-result">
      {counter} * {counter} * {counter} * {counter} * {counter} * {counter} ={" "}
      <span className="total">{counter ** 6}</span>
    </p>
  </div>
);

export default ExponentSix;
