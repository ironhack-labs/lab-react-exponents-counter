const ExponentThree = (prop) => (
   <div className="exponent-counter-container">
    <p className="exponent-label">{prop.count}³</p>
    <p className="exponent-result">{prop.count} * {prop.count} * {prop.count} = <span className="total">{prop.count**3}</span></p>
  </div>
);

export default ExponentThree;