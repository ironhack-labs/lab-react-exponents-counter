// const ExponentTwo = () => (
//    <div className="exponent-counter-container">
//     <p className="exponent-label">n²</p>
//     <p className="exponent-result">2 * 2 = <span className="total">4</span></p>
//   </div>
// );

// export default ExponentTwo;

const ExponentTwo = ({ count }) => (
  <div className="exponent-counter-container">
   <p className="exponent-label">n²</p>
   <p className="exponent-result">{count} * {count} = <span className="total">{Math.pow(count, 2)}</span></p>
 </div>
);

export default ExponentTwo;
