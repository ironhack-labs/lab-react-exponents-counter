const ExponentFive = ({num, exponent = 5}) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">n⁵</p>
    <p className="exponent-result">{num} * {num} * {num} * {num} * {num} = <span className="total">{Math.pow(num, exponent) }</span></p>
  </div>
);

export default ExponentFive;