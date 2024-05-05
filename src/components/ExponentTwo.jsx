const ExponentTwo = ({ number }) => {

  const total = number ** 2

  return (

    <div className="exponent-counter-container">
      <p className="exponent-label">{number}²</p>
      <p className="exponent-result">{number} * {number} = <span className="total">{total}</span></p>
    </div>
  );
}
export default ExponentTwo;

