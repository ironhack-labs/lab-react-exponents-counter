const superscripts = { 2: '²', 3: '³', 4: '⁴', 5: '⁵', 6: '⁶' };

const Exponent = ({ num, exponent }) => {
  const multiplication = Array(exponent).fill(num).join(' * ');
  const result = Math.pow(num, exponent);

  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">n{superscripts[exponent]}</p>
      <p className="exponent-result">{multiplication} = <span className="total">{result}</span></p>
    </div>
  );
};

export default Exponent;
