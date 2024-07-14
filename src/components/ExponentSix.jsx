const ExponentSix = (props) => {
  
  const count = props.count;
  
  function seis() {
    return count * count * count * count* count * count;
  }
  
  return(
  <div className="exponent-counter-container">
    <p className="exponent-label">n⁶</p>
    <p className="exponent-result">{count} * {count} * {count} * {count} * {count} * {count} = <span className="total">{seis()}</span></p>
  </div>
);}

export default ExponentSix;