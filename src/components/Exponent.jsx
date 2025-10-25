const Exponent = ({ num, exponent }) => {
  const result = Math.pow(num, exponent);

  // Create the calculation string (e.g., "2 * 2 * 2")
  const calculation = Array(exponent).fill(num).join(' * ');

  // Create the exponent label with superscript (e.g., "n²")
  const exponentSymbols = ['⁰', '¹', '²', '³', '⁴', '⁵', '⁶', '⁷', '⁸', '⁹'];
  const exponentLabel = 'n' + String(exponent).split('').map(digit => exponentSymbols[digit]).join('');

  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">{exponentLabel}</p>
      <p className="exponent-result">{calculation} = <span className="total">{result}</span></p>
    </div>
  );
};

export default Exponent;
