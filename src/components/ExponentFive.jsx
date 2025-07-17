const ExponentFive = ({ value }) => {
  const result = value ** 5;
  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">n⁵</p>
      <p className="exponent-result">
        {value} ^ 5 = <span className="total">{result}</span>
      </p>
    </div>
  );
};

export default ExponentFive;
