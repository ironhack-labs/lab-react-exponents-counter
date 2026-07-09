const Exponent = ({ num, exponent }) => {
  const factors = Array(exponent).fill(num);
  const multiplicationText = factors.join(" * ");

  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">
        {num}
        <sup>{exponent}</sup>
      </p>
      <p className="exponent-result">
        {multiplicationText} = <span className="total">{num ** exponent}</span>
      </p>
    </div>
  );
};

export default Exponent;
