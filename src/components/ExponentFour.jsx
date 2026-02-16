const ExponentFour = ({ count }) => {
  const total = count ** 4;

  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">n⁴</p>
      <p className="exponent-result">
        {count} * {count} * {count} * {count} ={" "}
        <span className="total">{total}</span>
      </p>
    </div>
  );
};

export default ExponentFour;
