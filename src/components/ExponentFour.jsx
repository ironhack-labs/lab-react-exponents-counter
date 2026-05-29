const ExponentFour = ({ count }) => {
  const exponent = 4;
  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">{count}⁴</p>
      <p className="exponent-result">
        {Array(exponent).fill(count).join(" * ")} ={" "}
        <span className="total">{count ** exponent}</span>
      </p>
    </div>
  );
};

export default ExponentFour;
