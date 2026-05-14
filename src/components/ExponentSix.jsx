export default function ExponentSix( { count }) {
  
  return (
  <div className="exponent-counter-container">
    <p className="exponent-label">n⁶</p>
    <p className="exponent-result">{count * count * count * count * count * count} = <span className="total">64</span></p>
  </div>
);
}
