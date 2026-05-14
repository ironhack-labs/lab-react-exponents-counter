function ExponentFour({ count }) {
  return (
    <div className="exponent-container">
      <p className="exponent-title">{count}⁴</p>
      <p className="exponent-result">{count} * {count} * {count} * {count} = <span className="total">{count ** 4}</span></p>
    </div>
  );
}

export default ExponentFour;


const ExponentFour = () => (
   <div className="exponent-counter-container">
    <p className="exponent-label">n⁴</p>
    <p className="exponent-result">2 * 2 * 2 * 2 = <span className="total">16</span></p>
  </div>
);

export default ExponentFour;