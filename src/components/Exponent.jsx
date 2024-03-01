const Exponent = ({count}) => {
    return (
      <>
  
      <div className="exponent-counter-container">
          <p className="exponent-label">{count}²</p>
          <p className="exponent-result">{count} * {count} = <span className="total">{count ** 2}</span></p>
      </div>
  
      <div className="exponent-counter-container">
          <p className="exponent-label">{count}³</p>
          <p className="exponent-result"> {count} * {count} * {count}= <span className="total">{count ** 3}</span></p>
      </div>
  
      <div className="exponent-counter-container">
          <p className="exponent-label">{count}⁴</p>
          <p className="exponent-result">{count} * {count} * {count} * {count} = <span className="total">{count ** 4}</span></p>
      </div>
  
      <div className="exponent-counter-container">
          <p className="exponent-label">{count}⁵</p>
          <p className="exponent-result">{count} * {count} * {count} * {count} * {count} = <span className="total">{count ** 5}</span></p>
      </div>
  
      <div className="exponent-counter-container">
          <p className="exponent-label">{count}⁶</p>
          <p className="exponent-result">{count} * {count} * {count} * {count} * {count} * {count} = <span className="total">{count ** 6}</span></p>
      </div>
      
      </>
  
    )
  }
  
  export default Exponent