const ExponentSix = (props) => {
  const multiplication = Array.from(
    { length: 6 },
    () => props.count
  ).join(" * ");

  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">
        n<sup>6</sup>
      </p>

      <p className="exponent-result">
        {multiplication} = <span className="total">{props.count ** 6}</span>
      </p>
    </div>
  );
};

export default ExponentSix;
