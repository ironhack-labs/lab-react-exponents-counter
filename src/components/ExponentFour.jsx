const ExponentFour = ( {value} ) => (
   <div className="exponent-counter-container">
    <p className="exponent-label">{value}⁴</p>
    <p className="exponent-result">{value} * {value} * {value} * {value} = <span className="total">{value ** 4}</span></p>
  </div>
);

export default ExponentFour;