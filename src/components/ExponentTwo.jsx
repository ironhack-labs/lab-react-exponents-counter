const ExponentTwo = (prop) => (
   <div className="exponent-counter-container">
    <p className="exponent-label">{prop.num}²</p>
    <p className="exponent-result">{prop.num} * {prop.num}= <span className="total">{prop.num * prop.num}</span></p>
  </div>
);

export default ExponentTwo;