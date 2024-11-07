const ExponentFour = ({ counter }) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">n⁴</p>
    <p className="exponent-result">{counter} * {counter} * {counter} * {counter} = <span className="total">{Math.pow(counter, 4)}</span></p>
  </div>
);

export default ExponentFour;