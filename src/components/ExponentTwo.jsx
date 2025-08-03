const ExponentTwo = () => (
   <div className="exponent-counter-container">
    <p className="exponent-label">n²</p>
    <p className="exponent-result">2 * 2 = <span className="total">4</span></p>
  </div>
);
function ExponentTwo({ count }) {
  return <p>{count ** 2}</p>;
}


export default ExponentTwo;