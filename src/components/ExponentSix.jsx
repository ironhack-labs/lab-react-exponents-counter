const ExponentSix = (props) => {
  let count = props.count;
  let result = count * count * count * count * count * count;
  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">{count}⁶</p>
      <p className="exponent-result">
        {count} * {count} * {count} * {count} * {count} * {count} ={" "}
        <span className="total">{result}</span>
      </p>
    </div>
  );
};

export default ExponentSix;
