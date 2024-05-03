const Exponent = (props) => {
    let product = props.count + ` * ${props.count}`.repeat(props.exponent-1)
    
    return (
        <div className="exponent-counter-container">
        <p className="exponent-label">{props.count}<sup>{props.exponent}</sup></p>        
        <p className="exponent-result">{product} = <span className="total">{props.count ** props.exponent}</span></p>
        </div>
    )
}

export default Exponent;

// num - Number value that serves as a base on which the exponent is added and calculated
// exponent - Number value representing the exponent to be applied to the base num.