const Exponent = ({n, count}) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">{count}<sup>{n}</sup></p>
    <p className="exponent-result">{[...Array(n).keys()].map(
      (_, index) => index === n-1 ? count : count + '*')} = <span className="total">{count**n}</span></p>
  </div>
);

export default Exponent;