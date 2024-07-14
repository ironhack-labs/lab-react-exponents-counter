const Exponents = (props) => {
    const count = props.count;
    
    function exponent(num) {
      return Math.pow(count,num) ;
    }
   
    return(
     <div className="exponent-counter-container">
      <p className="exponent-label">n2</p>
      <p className="exponent-result">{count} * {count}   = <span className="total">{exponent(2)}</span></p>
      <p className="exponent-label">n3</p>
      <p className="exponent-result">{count} * {count} * {count}  = <span className="total">{exponent(3)}</span></p>
      <p className="exponent-label">n4</p>
      <p className="exponent-result">{count} * {count} * {count} * {count} = <span className="total">{exponent(4)}</span></p>
      <p className="exponent-label">n5</p>
      <p className="exponent-result">{count} * {count} * {count} * {count} * {count} = <span className="total">{exponent(5)}</span></p>
      <p className="exponent-label">n6</p>
      <p className="exponent-result">{count} * {count} * {count} * {count} * {count} * {count}  = <span className="total">{exponent(6)}</span></p>

    </div>
  );}
  
  export default Exponents;