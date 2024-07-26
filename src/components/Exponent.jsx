const Exponent = ({ count, numExponent }) => {

    //let result = count * count
    const generateExponentResult = (count, numExponent) => {
        let result = ''
        for (let i = 0; i < numExponent; i++) {
            result += count
            if (i < numExponent - 1) {
                result += ' * ';
            }
        }
        return result
    }

    return (
        <div className="exponent-counter-container">
            <p className="exponent-label">{count}<sup>{numExponent}</sup></p>
            <p className="exponent-result">{generateExponentResult(count, numExponent)}= <span className="total">{Math.pow(count, numExponent)}</span></p>
        </div>
    );
}
export default Exponent;