function Exponent({ count, num }) {
  let result = "";
  for (let i = 0; i < num; i++) {
    result += i < num - 1 ? `${count} * ` : `${count} `;
  }

  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">
        {count}
        <sup>{num}</sup>
      </p>
      <p className="exponent-result">
        {result} = <span className="total">{count ** num}</span>
      </p>
    </div>
  );
}

export default Exponent;
