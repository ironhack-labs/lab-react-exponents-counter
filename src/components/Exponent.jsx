export const Exponent = ({ exponent, count }) => {
  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">
        {count}
        <sup>{exponent}</sup>
      </p>
      <p className="exponent-result">
        {Array(exponent).fill(count).join(" * ")} ={" "}
        <span className="total">{count ** exponent}</span>
      </p>
    </div>
  );
};
