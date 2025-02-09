function Exponent (props) {
    const exponentValue = 4;
   
    const callbackCountString = String(`${props.callbackCount} * `);
    console.log(callbackCountString)
   // const operationRepeat = props.callbackCount.repeat(exponentValue)
    return (
        <div className="exponent-counter-container">
        <p className="exponent-label">n²</p>
        <p className="exponent-result"> {callbackCountString.repeat(exponentValue).slice(0, -2)} = <span className="total">{props.callbackCount**exponentValue}</span></p>
      </div>
    );
}

export default Exponent