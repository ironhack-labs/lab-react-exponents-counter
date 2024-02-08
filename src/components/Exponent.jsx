const Exponent = (props) => {
  const result = Math.pow(props.count, props.multiplyBy);
  return (
    <p className="exponent-result">
      {props.count}^{props.multiplyBy} = <span className="total">{result}</span>
    </p>
  );
};
export default Exponent;
