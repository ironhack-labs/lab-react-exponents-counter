const ExponentFour = (prop) => (
   <div className="exponent-counter-container">
    <p className="exponent-label">{prop.count}⁴</p>
    <p className="exponent-result">{prop.count} * {prop.count} * {prop.count} * {prop.count} = <span className="total">{prop.count**4}</span></p>
  </div>
);

export default ExponentFour;