const ExponentFive = ({ base }) => {
  const terms = Array(5).fill(base).join(" * ");
  const result = base ** 5;

  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">n⁵</p>
      <p className="exponent-result">{terms} = <span className="total">{result}</span></p>
    </div>
  );
};

export default ExponentFive;