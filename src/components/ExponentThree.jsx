const ExponentThree = (props) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">n³</p>
    <p className="exponent-result">
      {props.count}³ = <span className="total">{props.count ** 3}</span>
    </p>
  </div>
);
export default ExponentThree;