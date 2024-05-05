const Exponent = ({ num, exponent }) => {
  const result = Math.pow(num, exponent);
  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">{`${num}${String.fromCharCode(
        8319 + exponent + 1
      )}`}</p>
      <p className="exponent-result">{result}</p>
    </div>
  );
};

export default Exponent;
