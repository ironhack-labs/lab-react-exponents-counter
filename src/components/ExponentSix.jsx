const ExponentSix = ({ number }) => {

  const total = number ** 6

  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">{number}⁶</p>
      <p className="exponent-result">{number} * {number} * {number} * {number} * {number} * {number} = <span className="total">{total}</span></p>
    </div>
  );
}
export default ExponentSix;