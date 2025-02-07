
const Exponent = ({num, exponent}) => {
    const result = num * Math.pow(num, exponent-1)
  return (
    <div className="exponent-counter-container">
    <p className="exponent-label">{num}</p>
    <p className="exponent-result">{num} * {Array(exponent).fill(2).join(' * ')}= <span className="total">{result}</span></p>
  </div>
  )
}

export default Exponent
