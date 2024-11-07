import React from "react"

function ExponentFive({ count }) {

  return (
    <div className="exponent-counter-container">
      <p className="counter-value">{count}⁵</p>
      <p className="exponent-result">{count} * {count} * {count}  * {count}  * {count}  = <span className="total">{count ** 5} </span></p>
    </div>
  )

}

export default ExponentFive;