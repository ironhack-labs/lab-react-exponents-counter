const Exponent = (props) => {
  let exponent = props.exponent;
  let num = props.num;
  let result = num ** exponent;

  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">
        {num}
        <sup>{exponent}</sup>
      </p>
      <p className="exponent-result">
        <span className="total">= {result}</span>
      </p>
    </div>
  );
};

export default Exponent;
