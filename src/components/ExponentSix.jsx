const ExponentSix = ({ count }) => {
  const total = count ** 6;

  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">n⁶</p>
      <p className="exponent-result">
        {count} * {count} * {count} * {count} * {count} * {count} ={" "}
        <span className="total">{total}</span>
      </p>
    </div>
  );
};

export default ExponentSix;
