const ExponentFive = () => (
  <div className="exponent-counter-container">
    <p className="exponent-label">n⁵</p>
    <p className="exponent-result">2 * 2 * 2 * 2 * 2 = <span className="total">32</span></p>
  </div>
);
function ExponentTwo({ count }) {
  return <p>{count ** 5}</p>;
}


export default ExponentFive;