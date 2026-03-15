

const Exponent = (props) => (
   <div className="exponent-counter-container">
    <p className="exponent-label">{props.count}<sup>{props.exponent}</sup>
    </p>
    <p className="exponent-result"> = <span className="total">{props.count ** props.exponent}</span></p>
  </div>
);

export default Exponent;