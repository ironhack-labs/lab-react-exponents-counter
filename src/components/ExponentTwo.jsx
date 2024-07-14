const ExponentTwo = ({ count }) => {
  const calculate = (count) => {
    let total = 0;
    total += count * count;
    return total;
  };

  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">{count}²</p>
      <p className="exponent-result">
        {count} * {count} = <span className="total">{calculate(count)}</span>
      </p>
    </div>
  );
};

export default ExponentTwo;
