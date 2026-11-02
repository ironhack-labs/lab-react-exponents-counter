const ExponentSix = (props) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">{props.count}</p>
    <p className="exponent-result">2 * 2 * 2 * 2 * 2 * 2 = <span className="total">{props.setCount}</span></p>
  </div>
);

export default ExponentSix;