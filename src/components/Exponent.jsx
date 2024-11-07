

const Exponent = (props) => {
    const displayMult = Array(props.num).fill(props.count).join(" * ");
    return (
      <div className="exponent-counter-container">
        <p className="exponent-label">{props.count}^{props.num}</p>
        <p className="exponent-result">
          {displayMult} = <span className="total">{Math.pow(props.count, props.num)}</span>
        </p>
      </div>
    );
  };

  export default Exponent;
