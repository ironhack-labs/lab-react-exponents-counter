const ExponentFour = ({ base }) => {
  const result = base ** 4;
return (
 <div className="exponent-counter-container">
  <p className="exponent-label">{base}⁴</p>
  <p className="exponent-result">{base} * {base} * {base} * {base} = <span className="total">{result}</span></p>
</div>
);
}; 
export default ExponentFour;


