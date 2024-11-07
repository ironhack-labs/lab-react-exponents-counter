const ExponentFour = ({ count }) => {

  const result = count * count * count * count

  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">{count}²</p>
      <p className="exponent-result">
        {count} * {count} * {count} * {count} = <span className="total">{result}</span>
      </p>
    </div>
  )
};

export default ExponentFour;