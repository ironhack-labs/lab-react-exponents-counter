const ExponentFive = (prop) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">{prop.count}⁵</p>
    <p className="exponent-result">{prop.count} * {prop.count} * {prop.count} * {prop.count} * {prop.count} = <span className="total">{prop.count**5}</span></p>
  </div>
);

export default ExponentFive;