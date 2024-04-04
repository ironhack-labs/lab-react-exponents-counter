const ExponentTwo = ({ exponent }) => (
  <div className="exponent-counter-container">
    <p className="exponent-label"> {exponent}²</p>
    <p className="exponent-result"> {exponent} * {exponent} = <span className="total"></span></p>
  </div>
);

export default ExponentTwo;