const Exponent = ({ num, exponent, symbol }) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">{symbol}</p>
    <p className="exponent-result">
      {num} ** {exponent} = <span className="total">{num ** exponent}</span>
    </p>
  </div>
);

export default Exponent;
