const ExponentThree = ({ count }) => {
  const exponent = 3;
  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">{count}³</p>
      <p className="exponent-result">
        {Array(exponent).fill(count).join(" * ")} ={" "}
        <span className="total">{count ** exponent}</span>
      </p>
    </div>
  );
};

export default ExponentThree;
