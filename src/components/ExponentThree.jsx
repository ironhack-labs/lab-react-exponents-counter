const ExponentThree = (props) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">n³</p>
    <p className="exponent-result">{props.count ** 3}</p>
  </div>
);

export default ExponentThree;
