const ExponentFour = (props) => {
  const exponentiation = props.count ** 4
  return (
   <div className="exponent-counter-container">
    <p className="exponent-label">{props.count}⁴</p>
    <p className="exponent-result">{props.count} * {props.count} * {props.count} * {props.count} = <span className="total">{exponentiation}</span></p>
  </div>
);
  }

export default ExponentFour;