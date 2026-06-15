const SUPERSCRIPTS = { 2: "²", 3: "³", 4: "⁴", 5: "⁵", 6: "⁶" };

const Exponent = ({ num, exponent }) => {
  const factors = Array(exponent).fill(num).join(" * ");
  const result = Math.pow(num, exponent);
  const superscript = SUPERSCRIPTS[exponent] ?? `^${exponent}`;

  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">n{superscript}</p>
      <p className="exponent-result">
        {factors} = <span className="total">{result}</span>
      </p>
    </div>
  );
};

export default Exponent;