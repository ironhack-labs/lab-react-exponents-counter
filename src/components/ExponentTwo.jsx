const ExponentTwo = ({count}) => {
  const exponentTwo = (count) => {
    return count * count;
  }

  return (
   <div className="exponent-counter-container">
    <p className="exponent-label">{count}²</p>
    <p className="exponent-result">{count} * {count} = <span className="total">{exponentTwo(count)}</span></p>
  </div>
  )

}

export default ExponentTwo;