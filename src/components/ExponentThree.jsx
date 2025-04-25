const ExponentThree = (props) => {
  const result = props.counter ** 3;

  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">{props.counter}²</p>
      <p className="exponent-result">{props.counter} * {props.counter} * {props.counter} = <span className="total">{result}</span></p>
    </div>
  );
};

export default ExponentThree;