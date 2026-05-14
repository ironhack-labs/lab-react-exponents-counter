export default function ExponentTwo( { count }) {
  
  return (
   <div className="exponent-counter-container">
    <p className="exponent-label">n²</p>
    <p className="exponent-result">{count * count} = <span className="total">4</span></p>
  </div>
);
}