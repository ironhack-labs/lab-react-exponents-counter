const ExponentThree = ({ count }) => {
  const total = Math.pow(count, 3);
  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">{count}³</p>
      <p className="exponent-result">
        {count} * {count} * {count} = <span className="total">{total}</span>
      </p>
    </div>
  );
};

export default ExponentThree;
