const ExponentFour = ({count}) => {
  const exponentFour = (count) => {
    return count * count * count * count;
  }

  return (
   <div className="exponent-counter-container">
    <p className="exponent-label">{count}⁴</p>
    <p className="exponent-result">{count} * {count} * {count} * {count} = <span className="total">{exponentFour(count)}</span></p>
  </div>
  )

}

export default ExponentFour;