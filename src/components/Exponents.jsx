const Exponents = ({ count, exponent }) => {
  const multiplicationString = Array(exponent).fill(count).join(' * ');
  const result = count ** exponent;
  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">
        {count}
        <sup>{exponent}</sup>
      </p>
      <p className="exponent-result">
        {multiplicationString} = <span className="total">{result}</span> 
      </p>
    </div>
  );
};

export default Exponents;