
const Exponent = ({num, exponent}) => (
    <div className="exponent-counter-container">
      <p className="exponent-label">{num} <sup>{exponent}</sup></p>
      <p className="exponent-result">{num} {`* ${num} `.repeat(exponent -1) }= <span className="total">{num**exponent}</span></p>
    </div>
  );
  
  export default Exponent;