const ExponentTwo = (prop) => (
   <div className="exponent-counter-container">
    <p className="exponent-label">{prop.count}²</p>
    <p className="exponent-result">{prop.count} * {prop.count} = <span className="total">{prop.count**2}</span></p>
  </div>
);

export default ExponentTwo;