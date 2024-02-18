const ExponentFive = (props) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">{props.sendCount}⁵</p>
    <p className="exponent-result">{props.sendCount} * {props.sendCount} * {props.sendCount} * {props.sendCount} * {props.sendCount} = <span className="total">32</span></p>
  </div>
);

export default ExponentFive;