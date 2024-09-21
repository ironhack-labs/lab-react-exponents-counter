const ExponentFive = (props) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">{props.n}⁵</p>
    <p className="exponent-result">{props.n} * {props.n} * {props.n} * {props.n} * {props.n} = <span className="total">{props.n*props.n*props.n*props.n*props.n}</span></p>
  </div>
);

export default ExponentFive;