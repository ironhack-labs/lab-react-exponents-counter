const ExponentFour = ({num, exponent = 4}) => (
   <div className="exponent-counter-container">
    <p className="exponent-label">n⁴</p>
    <p className="exponent-result">{num} * {num} * {num} * {num} = <span className="total">{Math.pow(num, exponent)}</span></p>
  </div>
);

export default ExponentFour;