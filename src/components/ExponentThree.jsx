const ExponentThree = ( {value} ) => (
   <div className="exponent-counter-container">
    <p className="exponent-label">{value}³</p>
    <p className="exponent-result">{value} * {value} * {value} = <span className="total">{value ** 3}</span></p>
  </div>
);

export default ExponentThree;