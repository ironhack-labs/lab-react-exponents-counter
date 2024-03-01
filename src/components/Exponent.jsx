

const Exponent = ({ count, factor }) => {

    let string = `${count} * `.repeat(factor).slice(0, -3)

  return (
    <div className="exponent-counter-container">
        <p className="exponent-label">{count}<sup >{factor}</sup></p>
    <p className="exponent-result">{string} = <span className="total">{count ** factor}</span></p>
    </div>
  )
}

export default Exponent