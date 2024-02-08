const ExponentTwo = (props) => {
  const { count } = props;

  const getTotal = (number) => {
    return Math.pow(count, number);
  };

  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">{count}²</p>
      <p className="exponent-result">
        {count}* {count} =<span className="total">{getTotal(2)}</span>
      </p>
    </div>
  );
};

export default ExponentTwo;
