const ExponentFive = (props) => {
  const numToExp = props.count;

  return(
  <div className="exponent-counter-container">
    <p className="exponent-label">{numToExp}⁵</p>
    <p className="exponent-result">{numToExp} * {numToExp} * {numToExp} * {numToExp} * {numToExp} = <span className="total">{numToExp ** 5}</span></p>
  </div>
);}

export default ExponentFive;