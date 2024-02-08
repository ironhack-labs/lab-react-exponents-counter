import React from 'react';

const ExponentTwo = ({ count }) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">{count}²</p>
    <p className="exponent-result">
      {count} * {count} = <span className="total">{count ** 2}</span>
    </p>
  </div>
);

export default ExponentTwo;

// const ExponentTwo = () => (
//    <div className="exponent-counter-container">
//     <p className="exponent-label">n²</p>
//     <p className="exponent-result">2 * 2 = <span className="total">4</span></p>
//   </div>
// );

// export default ExponentTwo;

// const ExponentTwo = ({ count }) => (
//    <div className="exponent-counter-container">
//     <p className="exponent-label">n²</p>
//     <p className="exponent-result">2 * 2 = <span className="total">{count * count}</span></p> {/* Calculate and display count value received from props */}
//   </div>
// );

// export default ExponentTwo;

// const ExponentTwo = ({ count }) => (
//    <div className="exponent-counter-container">
//     <p className="exponent-label">n²</p>
//     <p className="exponent-result">{count} * {count} = <span className="total">{count * count}</span></p> {/* Calculate and display count value received from props */}
//   </div>
// );

// export default ExponentTwo;