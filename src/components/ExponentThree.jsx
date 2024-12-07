const ExponentThree = (props) => {
  const numToExp = props.count;

  return(
   <div className="exponent-counter-container">
    <p className="exponent-label">{numToExp}³</p>
    <p className="exponent-result">{numToExp} * {numToExp} * {numToExp} = <span className="total">{numToExp ** 3}</span></p>
  </div>
);}

export default ExponentThree;