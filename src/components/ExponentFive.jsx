const ExponentFive = ({ base }) => {
  const result = base ** 5;
return (
 <div className="exponent-counter-container">
  <p className="exponent-label">{base}⁵</p>
  <p className="exponent-result">{base} * {base} * {base} * {base} * {base} = <span className="total">{result}</span></p>
</div>
);
}; 
export default ExponentFive;


