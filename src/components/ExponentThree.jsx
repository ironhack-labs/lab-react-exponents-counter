const ExponentThree = ({num, exponent = 3}) => (
   <div className="exponent-counter-container">
    <p className="exponent-label">n³</p>
    <p className="exponent-result">{num} * {num} * {num} = <span className="total">{Math.pow(num, exponent) }</span></p>
  </div>
);

export default ExponentThree;