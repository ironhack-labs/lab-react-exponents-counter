const ExponentFour = (props) => (
   <div className="exponent-counter-container">
    <p className="exponent-label">n⁴</p>
    <p className="exponent-result">{props.callbackCount} * {props.callbackCount} * {props.callbackCount} * {props.callbackCount} = <span className="total">{props.callbackCount*props.callbackCount*props.callbackCount*props.callbackCount}</span></p>
  </div>
);

export default ExponentFour;