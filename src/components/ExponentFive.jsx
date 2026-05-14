const ExponentFive = (props) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">n⁵</p>
    <p className="exponent-result">
      {props.count}⁵ = <span className="total">{props.count ** 5}</span>
    </p>
  </div>
);
export default ExponentFive;