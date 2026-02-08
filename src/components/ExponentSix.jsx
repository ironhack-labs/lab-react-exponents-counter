

function ExponentSix({count}){
    // setResault(resault = count ** 6)
   return(
      <div className="exponent-counter-container">
        <p className="exponent-label">{count}²</p>
        <p className="exponent-result">{count} * {count}* {count}* {count}* {count}* {count} = <span className="total">{count ** 6}</span></p>
      </div>
   )
}

export default ExponentSix;