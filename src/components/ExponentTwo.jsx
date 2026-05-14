function Exponent({ num, exponent }) {
  // Cria a sequência visual da multiplicação (Ex: 2 * 2 * 2)
  const multiplicationString = Array(exponent).fill(num).join(" * ");

  // Realiza o cálculo matemático da potência
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
