const ExponentFive = (props) => {
  const { count } = props;

  const getTotal = (number) => {
    return Math.pow(count, number);
  };

  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">{count}⁵</p>
      <p className="exponent-result">
        {count} * {count} *{count} *{count} * {count} ={" "}
        <span className="total">{getTotal(5)}</span>
      </p>
    </div>
  );
};

export default ExponentFive;
