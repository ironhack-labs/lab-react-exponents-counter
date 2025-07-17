const ExponentThree = ({ value }) => {
  const result = value ** 3;
  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">n³</p>
      <p className="exponent-result">
        {value} * {value} * {value} = <span className="total">{result}</span>
      </p>
    </div>
  );
};

export default ExponentThree;
