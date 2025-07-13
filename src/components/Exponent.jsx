const Exponent = (props) => (
   <div className="exponent-counter-container">
    <p className="exponent-label">{props.count}^{props.exponent}</p>
    <p className="exponent-result">{`${props.count} *`.repeat(props.exponent - 1)} {props.count} = <span className="total">{props.count**props.exponent}</span></p>
  </div>
);

export default Exponent;