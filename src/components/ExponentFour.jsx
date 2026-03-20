const ExponentFour = ({ base }) => {
  const terms = Array(4).fill(base).join(" * ");
  const result = base ** 4;

  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">n⁴</p>
      <p className="exponent-result">{terms} = <span className="total">{result}</span></p>
    </div>
  );
};

export default ExponentFour;