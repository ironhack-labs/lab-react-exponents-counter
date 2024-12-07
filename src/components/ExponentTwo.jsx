const ExponentTwo = (props) => {
  const numToExp = props.count;

  return (
   <div className="exponent-counter-container">
    <p className="exponent-label">{numToExp}²</p>
    <p className="exponent-result"> {numToExp} * {numToExp} = <span className="total">{numToExp ** 2}</span></p>
  </div>
)};

export default ExponentTwo;