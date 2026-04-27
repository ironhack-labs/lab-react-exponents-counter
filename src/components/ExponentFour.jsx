const ExponentFour = (props) => {
    const result = props.count ** 4;

    return (
        <div className="exponent-counter-container">
            <p className="exponent-label">n⁴</p>
            <p className="exponent-result">{props.count **4} = <span className="total">{result}</span></p>
        </div>
    );
};

export default ExponentFour;