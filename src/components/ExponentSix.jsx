const ExponentSix = () => (
  <div className="exponent-counter-container">
    <p className="exponent-label">n⁶</p>
    <p className="exponent-result">2 * 2 * 2 * 2 * 2 * 2 = <span className="total">64</span></p>
  </div>
);
function ExponentTwo({ count }) {
  return <p>{count ** 6}</p>;
}


export default ExponentSix;