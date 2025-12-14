const ExponentTwo = ({num, exponent = 2}) => (
   <div className="exponent-counter-container">
    <p className="exponent-label">n²</p>
    <p className="exponent-result">{num} * {num} = <span className="total">{ Math.pow(num, exponent) }</span></p>
  </div>
);

export default ExponentTwo;