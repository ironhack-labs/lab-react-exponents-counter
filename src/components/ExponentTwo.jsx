const ExponentTwo = (props) => {
  const  count = props.count;

  function cuadrado() {
    if(count !== 0)
    return count * count;
  }

  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">n²</p>
      <p className="exponent-result">
        {count} * {count} = <span className="total">{cuadrado()}</span>
      </p>
    </div>
  );
};

export default ExponentTwo;
