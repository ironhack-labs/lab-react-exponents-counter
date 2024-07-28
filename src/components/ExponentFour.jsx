const ExponentFour = ({ count }) => {

  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">{count}⁴</p>
      <p className="exponent-result">{count} * {count} * {count} * {count} = <span className="total">16</span></p>
    </div>

  )
}


export default ExponentFour;