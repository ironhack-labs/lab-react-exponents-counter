const ExponentThree = ({ base }) => {
  const result = base ** 3;
return (
 <div className="exponent-counter-container">
  <p className="exponent-label">{base}³</p>
  <p className="exponent-result">{base} * {base} * {base} = <span className="total">{result}</span></p>
</div>
);
}; 
export default ExponentThree;