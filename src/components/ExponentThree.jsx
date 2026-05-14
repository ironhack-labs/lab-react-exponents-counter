function Exponent({ num, exponent }) {
  const multiplicationString = Array(exponent).fill(num).join(" * ");

  const result = num ** exponent;

  return (
    <div className="exponent-container">
      <p className="exponent-title">
        {num}<sup>{exponent}</sup>
      </p>
      <p className="exponent-result">
        {multiplicationString} = <span className="total">{result}</span>
      </p>
    </div>
  );
}

export default Exponent;
