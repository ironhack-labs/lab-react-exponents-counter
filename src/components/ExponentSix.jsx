const ExponentSix = (prop) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">{prop.count}⁶</p>
    <p className="exponent-result">{prop.count} * {prop.count} * {prop.count} * {prop.count} * {prop.count} * {prop.count} = <span className="total">{prop.count**6}</span></p>
  </div>
);

export default ExponentSix;