const ExponentThree = (props) => {
  const { count } = props;
  const getTotal = (number) => {
    return Math.pow(count, number);
  };
  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">{count}³</p>
      <p className="exponent-result">
        {count} * {count} *{count} ={" "}
        <span className="total">{getTotal(3)}</span>
      </p>
    </div>
  );
};

export default ExponentThree;
