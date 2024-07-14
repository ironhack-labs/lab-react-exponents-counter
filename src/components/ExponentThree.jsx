const ExponentThree = (props) => {
  const count = props.count;

  function cubo() {
    return count * count * count;
  }

  return(
   <div className="exponent-counter-container">
    <p className="exponent-label">n³</p>
    <p className="exponent-result">{count} * {count} * {count} = <span className="total">{cubo()}</span></p>
  </div>
);}

export default ExponentThree;