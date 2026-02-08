function ExponentFive({count}){
    // setResault(resault = count * count * count * count* count)
   return(
      <div className="exponent-counter-container">
        <p className="exponent-label">{count}²</p>
        <p className="exponent-result">{count} * {count}* {count}* {count}* {count} = <span className="total">{rcount ** 5}</span></p>
      </div>
   )
}

export default ExponentFive;