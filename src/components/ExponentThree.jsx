const ExponentThree = () => (
   <div className="exponent-counter-container">
    <p className="exponent-label">n³</p>
    <p className="exponent-result">2 * 2 * 2 = <span className="total">8</span></p>
  </div>
);
function ExponentTwo({ count }) {
  return <p>{count ** 3}</p>;
}


export default ExponentThree;