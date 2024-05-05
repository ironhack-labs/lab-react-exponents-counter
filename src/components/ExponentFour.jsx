const ExponentFour = ({ number }) => {

  const total = number ** 4
  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">{number}⁴</p>
      <p className="exponent-result">{number} * {number} * {number} * {number} = <span className="total">{total}</span></p>
    </div>
  );
}
export default ExponentFour;