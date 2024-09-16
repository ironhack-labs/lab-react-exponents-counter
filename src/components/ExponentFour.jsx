const ExponentFour = (props) => (
   <div className="exponent-counter-container">
    <p className="exponent-label">{props.sendCount}⁴</p>
    <p className="exponent-result">{props.sendCount} * {props.sendCount} * {props.sendCount} * {props.sendCount} = <span className="total">{props.sendCount * props.sendCount * props.sendCount * props.sendCount}</span></p>
  </div>
);

export default ExponentFour;