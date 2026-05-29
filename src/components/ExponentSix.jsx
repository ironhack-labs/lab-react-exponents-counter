const ExponentSix = ({ count }) => {
  const exponent = 6;
  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">{count}⁶</p>
      <p className="exponent-result">
        {Array(exponent).fill(count).join(" * ")} ={" "}
        <span className="total">{count ** exponent}</span>
      </p>
    </div>
  );
};
export default ExponentSix;
