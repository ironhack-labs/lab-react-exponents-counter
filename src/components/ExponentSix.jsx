const ExponentSix = ({num, exponent = 6}) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">n⁶</p>
    <p className="exponent-result">{num} * {num} * {num} * {num} * {num} * {num} = <span className="total">{Math.pow(num, exponent)}</span></p>
  </div>
);

export default ExponentSix;