const ExponentFour = (props) => {
  const { count } = props;

  const getTotal = (number) => {
    return Math.pow(count, number);
  };
  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">{count}⁴</p>
      <p className="exponent-result">
        {count} *{count} * {count} *{count} ={" "}
        <span className="total">{getTotal(4)}</span>
      </p>
    </div>
  );
};

export default ExponentFour;
