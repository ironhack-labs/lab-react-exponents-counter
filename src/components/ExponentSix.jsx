const ExponentSix = ({ count, calculateExp }) => {

  const result = calculateExp(count, 6);
  (
    <div className="exponent-counter-container">
      <p className="exponent-label">{count}⁶</p>
      <p className="exponent-result">{count} * {count} * {count} * {count} * {count} * {count} = <span className="total">{result}</span></p>
    </div>
  );
}
export default ExponentSix;