const ExponentSix = ({ count }) => {
  const total = Math.pow(count, 6);
  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">{count}⁶</p>
      <p className="exponent-result">
        {count} * {count} * {count} * {count} * {count} * {count} ={" "}
        <span className="total">{total}</span>
      </p>
    </div>
  );
};

export default ExponentSix;
