const ExponentTwo = (props) => {
  let result = props.count * props.count;
  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">{props.count}²</p>
      <p className="exponent-result">
        {props.count} * {props.count} = <span className="total">{result}</span>
      </p>
    </div>
  );
};

export default ExponentTwo;
