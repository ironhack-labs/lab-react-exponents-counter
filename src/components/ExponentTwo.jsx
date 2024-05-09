const ExponentTwo = (props) => (
   <div className="exponent-counter-container">
    <p className="exponent-label">n²</p>
    <p className="exponent-result">2 * 2 = <span className="total">{props.count}</span></p>
  </div>
);

export default ExponentTwo;