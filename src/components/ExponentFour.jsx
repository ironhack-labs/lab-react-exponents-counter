const ExponentFour = (props) => {
  const count = props.count;
  
  function cuatro() {
    return count * count * count * count;
  }
  
  
  return(
   <div className="exponent-counter-container">
    <p className="exponent-label">n⁴</p>
    <p className="exponent-result">{count} * {count} * {count} * {count} = <span className="total">{cuatro()}</span></p>
  </div>
);}

export default ExponentFour;