
function Exponent(props) {
  const result = props.n**props.exp
  const nString = props.n.toString() + " * "
  const expOnString = nString.repeat(props.exp).slice(0,-3)

  return (
    <div className="exponent-counter-container">
    <p className="exponent-label">{props.n}*{props.exp}</p>
    <p className="exponent-result">{expOnString} = <span className="total">{result}</span></p>
    </div>
  )
}

export default Exponent