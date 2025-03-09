const ExponentSix = (props) => {

  let num = props.count;
  let result = num ** 6;

  return (

    <div className="exponent-counter-container">
      <p className="exponent-label">{props.count}⁶</p>
      <p className="exponent-result">
        {props.count} * {props.count} * {props.count} * {props.count} * {props.count}* {props.count} = <span className="total">{result}</span>
      </p>
    </div>

  );
};

export default ExponentSix;