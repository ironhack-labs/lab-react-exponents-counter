const ExponentSix = (props) => {
  const numToExp = props.count;

  return (
  <div className="exponent-counter-container">
    <p className="exponent-label">{numToExp}⁶</p>
    <p className="exponent-result">{numToExp} * {numToExp} * {numToExp} * {numToExp} * {numToExp} * {numToExp} = <span className="total">{numToExp ** 6}</span></p>
  </div>
);}

export default ExponentSix;