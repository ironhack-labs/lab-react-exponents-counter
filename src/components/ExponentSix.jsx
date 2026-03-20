const ExponentSix = ({ base }) => {
  const terms = Array(6).fill(base).join(" * ");
  const result = base ** 6;

  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">n⁶</p>
      <p className="exponent-result">{terms} = <span className="total">{result}</span></p>
    </div>
  );
};

export default ExponentSix;