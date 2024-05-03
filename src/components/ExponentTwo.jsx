const ExponentTwo = (props) => (
   <div className="exponent-counter-container">
    <p className="exponent-label">n²</p>
    <p className="exponent-result">{props.counter} * {props.counter} = <span className="total">{Math.pow(props.counter,2)}</span></p>
  </div>
);

export default ExponentTwo;