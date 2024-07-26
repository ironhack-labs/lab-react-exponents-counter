const ExponentFour = ({ count }) => {
  //let result = count * count * count * count
  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">n⁴</p>
      <p className="exponent-result">{count} * {count} * {count} * {count} = <span className="total">{Math.pow(count, 4)}</span></p>
    </div>
  );
}

export default ExponentFour;