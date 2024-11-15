const ExponentFive = ({count}) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">{count}⁵</p>
    <p className="exponent-result">{`${count} * `.repeat(5).slice(0, -2)} = <span className="total">{count ** 5}</span></p>
  </div>
);

export default ExponentFive;