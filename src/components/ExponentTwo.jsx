const ExponentTwo = ({ base }) => {
  const terms = Array(2).fill(base).join(" * ");
  const result = base ** 2;

  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">n²</p>
      <p className="exponent-result">{terms} = <span className="total">{result}</span></p>
    </div>
  );
};

export default ExponentTwo;