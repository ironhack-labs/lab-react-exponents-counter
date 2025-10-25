const ExponentTwo = ({ count }) => {
  const result = count * count;
  const calculation = `${count} * ${count}`;

  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">n²</p>
      <p className="exponent-result">{calculation} = <span className="total">{result}</span></p>
    </div>
  );
};

export default ExponentTwo;