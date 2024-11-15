const ExponentFour = ({count}) => (
   <div className="exponent-counter-container">
    <p className="exponent-label">{count}⁴</p>
    <p className="exponent-result">{`${count} * `.repeat(4).slice(0, -2)} = <span className="total">{count ** 4}</span></p>
  </div>
);

export default ExponentFour;