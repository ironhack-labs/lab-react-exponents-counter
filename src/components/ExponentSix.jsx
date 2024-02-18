const ExponentSix = (props) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">{props.sendCount}⁶</p>
    <p className="exponent-result">{props.sendCount} * {props.sendCount} * {props.sendCount} * {props.sendCount} * {props.sendCount} * {props.sendCount} = <span className="total">64</span></p>
  </div>
);

export default ExponentSix;