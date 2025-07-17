const ExponentFour = ({ value }) => {
  const result = value ** 4;
  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">n⁴</p>
      <p className="exponent-result">
        {value} ^ 4 = <span className="total">{result}</span>
      </p>
    </div>
  );
};

export default ExponentFour;
