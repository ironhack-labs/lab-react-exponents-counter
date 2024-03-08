const Exponents = ({ count }) => {
  let num = count;
  let result2 = num ** 2;
  let result3 = num ** 3;
  let result4 = num ** 4;
  let result5 = num ** 5;
  let result6 = num ** 6;

  return (
    <div className="container">
      <div className="exponent-counter-container">
        <p className="exponent-label">{count}²</p>
        <p className="exponent-result">
          {count} * {count} = <span className="total">{result2}</span>
        </p>
      </div>
      <div className="exponent-counter-container">
        <p className="exponent-label">{count}³</p>
        <p className="exponent-result">
          {count} * {count} * {count} = <span className="total">{result3}</span>
        </p>
      </div>
      <div className="exponent-counter-container">
        <p className="exponent-label">{count}⁴</p>
        <p className="exponent-result">
          {count} * {count} * {count} * {count}= <span className="total">{result4}</span>
        </p>
      </div>
      <div className="exponent-counter-container">
        <p className="exponent-label">{count}⁵</p>
        <p className="exponent-result">
          {count} * {count} * {count} * {count} * {count}= <span className="total">{result5}</span>
        </p>
      </div>
      <div className="exponent-counter-container">
        <p className="exponent-label">{count}⁶</p>
        <p className="exponent-result">
          {count} * {count} * {count} * {count} * {count} * {count} = <span className="total">{result6}</span>
        </p>
      </div>
    </div>
  );
};

export default Exponents;
