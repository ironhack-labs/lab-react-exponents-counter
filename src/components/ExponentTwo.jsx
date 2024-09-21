

const ExponentTwo = (props) => {

  
  const {n, exp , set} = props
  
  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">{n}²</p>
      <p className="exponent-result">{n} * {n} = <span className="total">{n*n}</span></p>
    </div>
  )
};

export default ExponentTwo;