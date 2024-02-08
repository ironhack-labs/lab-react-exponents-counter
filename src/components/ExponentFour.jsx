
const ExponentFour = ({ count }) => {

  let result = count * 4

  return (

    <div className="exponent-counter-container">
      <p className="exponent-label">{count}⁴</p>
      <p className="exponent-result">{count} * {count} * {count} * {count} = <span className="total">{result}</span></p>
    </div>

  )

};

export default ExponentFour;