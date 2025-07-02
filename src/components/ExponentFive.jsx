const ExponentFive = ({ base }) => {
  const power = 5;
  const result = Math.pow(base, power);
  const factors = Array(power).fill(base).join(" * "); // "2 * 2 * 2 * 2 * 2"

  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">n⁵</p>
      <p className="exponent-result">
        {factors} = <span className="total">{result}</span>
      </p>
    </div>
  );
};

export default ExponentFive;