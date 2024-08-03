const ExponentFive = ({ count }) => {
  const result = Math.pow(count, 5)
  return (
  <div className="exponent-counter-container">
      <p className="exponent-label">{count}<sup>5</sup></p>
      <p className="exponent-result">{count} * {count} * {count} * {count} * {count} = <span className="total">{result}</span></p>
    </div>
  )
};

export default ExponentFive;