export default function ExponentFive({ count }) {

return (
  <div className="exponent-counter-container">
    <p className="exponent-label">n⁵</p>
    <p className="exponent-result">{count * count * count * count * count }= <span className="total">32</span></p>
  </div>
);

}
