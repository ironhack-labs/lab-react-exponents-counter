
const NewExponent = ({count, num}) => {
    const multiplicationString = Array(num).fill(count).join(" * ");

    return (
    <div className="exponent-counter-container">
      <p className="exponent-label">{count} <sup>{num}</sup></p>
      <p className="exponent-result">{multiplicationString} = <span className="total">{count ** num}</span></p>
    </div>
  )}
  
export default NewExponent;