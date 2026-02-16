const ExponentTwo = ({ count }) => {
  const total = count ** 2;

  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">n²</p>
      <p className="exponent-result">
        {count} * {count} = <span className="total">{total}</span>
      </p>
    </div>
  );
};

export default ExponentTwo;
