const ExponentFour = (props) => {
  const numToExp = props.count;

  return(
   <div className="exponent-counter-container">
    <p className="exponent-label">{numToExp}⁴</p>
    <p className="exponent-result">{numToExp} * {numToExp} * {numToExp} * {numToExp} = <span className="total">{numToExp ** 4}</span></p>
  </div>
);}

export default ExponentFour;