const Exponent = (props) => (
    <div className="exponent-counter-container">
        <p className="exponent-label">{props.num}<sup>{props.exponent}</sup></p>
        <p className="exponent-result">
            {Array(props.exponent).fill(props.num).join(" * ")} = <span className="total">{Math.pow(props.num, props.exponent)}</span>
        </p>
    </div>
);

export default Exponent;