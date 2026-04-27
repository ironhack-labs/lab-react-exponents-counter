const ExponentThree = (props) => {
  const result = props.count ** 3;

  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">n³</p>
      <p className="exponent-result">{props.count *3}³ = <span className="total">{result}</span></p>
    </div>
  );
};

export default ExponentThree;