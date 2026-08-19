function Exponent(props) {
  const result = props.num ** props.exponent;

  const factors = Array(props.exponent).fill(props.num).join(" * ");

  return (
    <div className="exponent">
      <h2>
        n<sup>{props.exponent}</sup>
      </h2>

      <p>
        {factors} = <strong>{result}</strong>
      </p>
    </div>
  );
}

export default Exponent;