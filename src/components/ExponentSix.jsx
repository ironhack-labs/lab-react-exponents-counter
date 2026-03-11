const ExponentSix = (props) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">n⁶</p>
    <p className="exponent-result">{props.count ** 6}</p>
  </div>
);

export default ExponentSix;
