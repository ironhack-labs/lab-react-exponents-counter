const ExponentThree = ({ count }) => {
  const total = count ** 3;

  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">n³</p>
      <p className="exponent-result">
        {count} * {count} * {count} ={" "}
        <span className="total">{total}</span>
      </p>
    </div>
  );
};

export default ExponentThree;
