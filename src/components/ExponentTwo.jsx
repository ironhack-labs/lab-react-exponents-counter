const ExponentTwo = ({ value }) => {
  const result = value ** 2;
  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">n²</p>
      <p className="exponent-result">
        {value} * {value} = <span className="total">{result}</span>
      </p>
    </div>
  );
};

export default ExponentTwo;
