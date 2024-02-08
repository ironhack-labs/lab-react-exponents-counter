const ExponentSix = (props) => {
  const { count } = props;
  const getTotal = (number) => {
    return Math.pow(count, number);
  };
  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">{count}⁶</p>
      <p className="exponent-result">
        {count} *{count} *{count} * {count} * {count} * {count} ={" "}
        <span className="total">{getTotal(6)}</span>
      </p>
    </div>
  );
};

export default ExponentSix;
