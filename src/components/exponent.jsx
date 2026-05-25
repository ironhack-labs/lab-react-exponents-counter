function Exponent( { num, exponent }) {
  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">{num}<sup>{exponent}</sup></p>
      <p className="exponent-result">
        {num}*{num} = <span className="total">{num ** exponent}</span>
      </p>
    </div>
  );
}
export default Exponent;
