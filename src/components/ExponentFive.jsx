const ExponentFive = ({count}) => {
  const exponentFive = (count) => {
    return count * count * count * count * count;
  }

  return (
   <div className="exponent-counter-container">
    <p className="exponent-label">{count}⁵</p>
    <p className="exponent-result">{count} * {count} * {count} * {count} * {count} = <span className="total">{exponentFive(count)}</span></p>
  </div>
  )

}

export default ExponentFive;