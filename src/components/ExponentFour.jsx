const ExponentFour = ({count}) => {
  const result = count ** 4;
  return (<div className="exponent-counter-container">
    <p className="exponent-label">n⁴</p>
    <p className="exponent-result">{count}⁴ = <span className="total">{result}</span></p>
  </div>
  );
};

export default ExponentFour;