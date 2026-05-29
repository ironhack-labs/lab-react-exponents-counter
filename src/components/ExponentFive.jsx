const ExponentFive = ({ count }) => {
  const exponent = 5;
  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">{count}⁵</p>
      <p className="exponent-result">
        {Array(exponent).fill(count).join(" * ")} ={" "}
        <span className="total">{count ** exponent}</span>
      </p>
    </div>
  );
};

export default ExponentFive;
