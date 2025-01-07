const ExponentSix = ({ base }) => {
  const result = base ** 6;
return (
 <div className="exponent-counter-container">
  <p className="exponent-label">{base}⁶</p>
  <p className="exponent-result">{base} * {base} * {base} * {base} * {base} * {base} = <span className="total">{result}</span></p>
</div>
);
}; 
export default ExponentSix;

