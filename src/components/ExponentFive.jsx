const ExponentFive = ({ count }) => {
  const total = count ** 5;

  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">n⁵</p>
      <p className="exponent-result">
        {count} * {count} * {count} * {count} * {count} ={" "}
        <span className="total">{total}</span>
      </p>
    </div>
  );
};

export default ExponentFive;
