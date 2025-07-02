const ExponentSix = ({base}) => {
  const power = 6;
  const result = Math.pow(base, power);
  const factors = Array(power).fill(base).join(" * ")

  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">n⁶</p>
      <p className="exponent-result">
        {factors} = <span className="total">{result}</span>
      </p>
    </div>
  );
}

export default ExponentSix;