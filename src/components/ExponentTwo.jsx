const ExponentTwo = ({ count }) => {

  const calculateExponentTwo = count * count

  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">{count}²</p>
      <p className="exponent-result">{count} * {count} = <span className="total">{calculateExponentTwo}</span></p>
    </div>
  )
}

export default ExponentTwo;