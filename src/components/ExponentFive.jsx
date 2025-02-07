const ExponentFive = ({count, exponent}) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">{count}⁵</p>
    <p className="exponent-result">{count} * {count} * {count} * {count} * {count} = <span className="total">{Math.pow(count, exponent)}</span></p>
  </div>
);

export default ExponentFive;