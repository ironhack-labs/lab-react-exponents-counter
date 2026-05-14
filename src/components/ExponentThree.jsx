export default function ExponentThree( { count }) {
  
  return (
   <div className="exponent-counter-container">
    <p className="exponent-label">n³</p>
    <p className="exponent-result">{count * count * count} = <span className="total">8</span></p>
  </div>
);
}