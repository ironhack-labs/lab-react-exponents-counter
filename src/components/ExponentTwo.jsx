const ExponentTwo = ({ base }) => {
    const result = base ** 2;
  return (
   <div className="exponent-counter-container">
    <p className="exponent-label">{base}²</p>
    <p className="exponent-result">{base} * {base} = <span className="total">{result}</span></p>
  </div>
);
}; 
export default ExponentTwo;