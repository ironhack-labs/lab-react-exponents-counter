const ExponentFive = (props) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">n⁵</p>
    <p className="exponent-result">2 * 2 * 2 * 2 * 2 = <span className="total">{String(props.count * props.count
       * props.count  * props.count  * props.count)}</span></p>
  </div>
);

export default ExponentFive;