const ExponentTwo = (props) => (
   
<div className="exponent-counter-container">
    <p className="exponent-label">{props.sendCount}²</p>
    <p className="exponent-result"> ({props.sendCount} * {props.sendCount}) = <span className="total">No sale 😢 </span></p>
  </div>
   
);

export default ExponentTwo;