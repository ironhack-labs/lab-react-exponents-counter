const ExponentThree = ({ base }) => {
  const terms = Array(3).fill(base).join(" * ");
  const result = base ** 3;

  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">n³</p>
      <p className="exponent-result">{terms} = <span className="total">{result}</span></p>
    </div>
  );
};

export default ExponentThree;