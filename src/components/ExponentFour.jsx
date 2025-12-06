const ExponentFour = (props) => {
  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">n⁴</p>
      <p className="exponent-result">
        {props.count} * {props.count} * {props.count} * {props.count} = 
        <span className="total">{props.count * props.count * props.count * props.count}</span>
      </p>
    </div>
  );
};

export default ExponentFour;