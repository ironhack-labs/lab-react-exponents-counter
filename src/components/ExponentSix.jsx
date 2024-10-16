const ExponentSix = ({ count }) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">n⁶</p>
    <p className="exponent-result">{`${count}^6`} = <span className="total">{Math.pow(count,6)}</span></p>
  </div>
);

export default ExponentSix;