const ExponentThree = ({count}) => {
  const exponentThree = (count) => {
    return count * count * count;
  }

  return (
   <div className="exponent-counter-container">
    <p className="exponent-label">{count}³</p>
    <p className="exponent-result">{count} * {count} * {count} = <span className="total">{exponentThree(count)}</span></p>
  </div>
  )

}

export default ExponentThree;