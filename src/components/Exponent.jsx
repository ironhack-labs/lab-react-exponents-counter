function Exponent(props) {
  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">
        n<sup>{props.num}</sup>
      </p>
      <p className="exponent-result">
        {props.exponent} * {props.num} ={" "}
        <span className="total">{props.exponent ** props.num}</span>
      </p>
    </div>
  );
}

export default Exponent;
