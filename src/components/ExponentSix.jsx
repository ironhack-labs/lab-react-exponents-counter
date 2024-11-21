const ExponentSix = ({count}) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">{count}⁶</p>
    <p className="exponent-result">{count **6} = <span className="total">{count **6}</span></p>
  </div>
);

export default ExponentSix;