const ExponentFour = () => (
   <div className="exponent-counter-container">
    <p className="exponent-label">n⁴</p>
    <p className="exponent-result">2 * 2 * 2 * 2 = <span className="total">16</span></p>
  </div>
);
function ExponentTwo({ count }) {
  return <p>{count ** 4}</p>;
}


export default ExponentFour;