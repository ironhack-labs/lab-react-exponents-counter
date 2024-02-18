const ExponentThree = (props) => (
   <div className="exponent-counter-container">
    <p className="exponent-label">{props.sendCount}³</p>
    <p className="exponent-result">{props.sendCount} * {props.sendCount} * {props.sendCount} = <span className="total">8</span></p>
  </div>
);

export default ExponentThree;