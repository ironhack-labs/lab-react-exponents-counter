const Exponent = ({num, exponent}) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">{num}<span className="exponent">{exponent}</span></p>
    <p className="exponent-result">2 {"* 2 ".repeat(exponent - 1)} = <span className="total">{num ** exponent }</span></p>
  </div>
);

export default Exponent;