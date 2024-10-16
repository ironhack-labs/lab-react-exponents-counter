const ExponentFour = ({count}) => (
   <div className="exponent-counter-container">
    <p className="exponent-label">n⁴</p>
    <p className="exponent-result">{`${count}^4`} = <span className="total">{Math.pow(count,4)}</span></p>
  </div>
);

export default ExponentFour;