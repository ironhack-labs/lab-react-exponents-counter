const ExponentFour = (props) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">n⁴</p>
    <p className="exponent-result">{props.count ** 4}</p>
  </div>
);

export default ExponentFour;
