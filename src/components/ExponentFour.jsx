const ExponentFour = ({ count }) => {
  const result4 = count * count * count * count;
  return(
   <div className="exponent-counter-container">
    <p className="exponent-label">{ count }⁴</p>
    <p className="exponent-result">{count} * {count} * {count} * {count}= <span className="total">{result4}</span></p>
  </div>
);
}
export default ExponentFour;