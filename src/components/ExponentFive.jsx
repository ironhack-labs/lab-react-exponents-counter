const ExponentFive = (props) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">n⁵</p>
    <p className="exponent-result">{props.count ** 5}</p>
  </div>
);

export default ExponentFive;
