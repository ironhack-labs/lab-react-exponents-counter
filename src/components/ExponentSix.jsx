const ExponentSix = (props) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">n⁶</p>
    <p className="exponent-result">
      {props.count} * {props.count} * {props.count} * {props.count} * {props.count} * {props.count} = <span className="total">64</span>
    </p>
  </div>
);

export default ExponentSix;
