const ExponentThree = ({ number }) => {

  const total = number ** 3

  return (

    <div className="exponent-counter-container">
      <p className="exponent-label">{number}³</p>
      <p className="exponent-result">{number} * {number} * {number} = <span className="total">{total} </span></p>
    </div>
  );
}

export default ExponentThree;