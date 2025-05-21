const ExponentThree = ({ count }) => {
  const result = count ** 3;
  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">n³</p>
      <p className="exponent-result">
        {Array(3).fill(count).join(' * ')} = <span className="total">{result}</span>
      </p>
    </div>
  );
};

export default ExponentThree;
