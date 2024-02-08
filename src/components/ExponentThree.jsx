const ExponentThree = (props) => (
   <div className="exponent-counter-container">
    <p className="exponent-label">n³</p>
    <p className="exponent-result">{props.counter} * {props.counter} * {props.counter} = <span className="total">{props.counter**3}</span></p>
  </div>
);

export default ExponentThree;