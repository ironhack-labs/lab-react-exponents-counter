
function Exponent({num,exp}){
  return (
    <div className="exponent-counter-container">
    <p className="exponent-label">{num}^{exp}</p>
    <p className="exponent-result">{num}^{exp}= <span className="total">{num**exp}</span></p>
  </div>
  )
}

export default Exponent
