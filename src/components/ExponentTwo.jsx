const ExponentTwo = ({ count }) => {
  const total = Math.pow(count, 2);
  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">{count}²</p>
      <p className="exponent-result">
        {count} * {count}= <span className="total">{total}</span>
      </p>
    </div>
  );
};

export default ExponentTwo;
