const ExponentTwo = ({ count }) => {
  const result = count ** 2;
  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">n²</p>
      <p className="exponent-result">
        {Array(2).fill(count).join(' * ')} = <span className="total">{result}</span>
      </p>
    </div>
  );
};

export default ExponentTwo;
