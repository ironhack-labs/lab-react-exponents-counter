const Exponent = ({ count, numberArr}) => {

 
  const exponentArr = numberArr.map((number) => {
    const vars = Array(number).fill(count).reduce((acc,val)=>{
      return acc === '' ? `${val}` : `${acc} * ${val}`
    },'')
    return (
      <div className="exponent-counter-container">
        <p className="exponent-label">{count}<sup>{number}</sup></p>
        <p className="exponent-result">{vars} = <span className="total">{count ** number}</span></p>
      </div>
    )
  })
  return exponentArr
};

export default Exponent;