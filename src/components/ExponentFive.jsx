const ExponentFive = (props) => {
  const getResult = (number) => {
    return Math.pow(props.count, number);
  };

  return (
    <div className="exponent-counter-container">
      <p className="counter-value">
        {props.count} <sup>5</sup>{" "}
      </p>
      <p className="exponent-result">
        {props.count} * {props.count} * {props.count} * {props.count} *
        {props.count} = <span className="result">{getResult(5)}</span>
      </p>
    </div>
  );
};

export default ExponentFive;
