function Exponent (props) {
    const result = props.count ** props.exponent;

    return (
        <div className="exponent-counter-container">
            <p className="exponent-label">{props.count}<sup>{props.exponent}</sup></p>
            <p className="exponent-result">{props.count} * {props.count} = <span className="total"> {result} </span></p>
        </div>
    )
}
 
export default Exponent;