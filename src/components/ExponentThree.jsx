function ExponentThree({count}){
    // setResault(resault = count * count * count)
   return(
      <div className="exponent-counter-container">
        <p className="exponent-label">{count}²</p>
        <p className="exponent-result">{count} * {count}* {count} = <span className="total">{count ** 3}</span></p>
      </div>
   )
}

export default ExponentThree;