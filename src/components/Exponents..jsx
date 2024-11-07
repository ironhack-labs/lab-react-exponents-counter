function Exponents({ num, exponent }) {
  const result = num ** exponent;

  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">
        {num} ^ {exponent}
      </p>
      <p className="exponent-result">
        <span className="total">{result}</span>
      </p>
    </div>
  );
}

export default Exponents;
