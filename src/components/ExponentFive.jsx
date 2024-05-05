const ExponentFive = ({ number }) => {

  const total = number ** 5

  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">{number}⁵</p>
      <p className="exponent-result">{number} * {number} * {number} * {number} * {number}= <span className="total">{total}</span></p>
    </div>
  );
}
export default ExponentFive;