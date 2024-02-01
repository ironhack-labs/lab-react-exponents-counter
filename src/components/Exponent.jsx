const Exponent = ({ count, exponent }) => {
  let expression = "";

  for (let i = 0; i < exponent; i++) {
    expression += count;
    if (i < exponent - 1) {
      expression += " * ";
    }
  }
  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">
        {" "}
        {count}
        <sup>{exponent}</sup>
      </p>
      <p className="exponent-result">
        {expression} = <span className="total">{count ** exponent}</span>
      </p>
    </div>
  );
};

export default Exponent;
