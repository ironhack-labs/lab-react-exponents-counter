const Exponent = ({num, exponent}) => {
    const result = Math.pow(num, exponent);
  
    const multSequence = Array(exponent).fill(num).join(" * ")

    return (
      <div className="exponent-counter-container">
        <p className="exponent-label">{num}<sup>{exponent}</sup></p>
        <p className="exponent-result">{multSequence} = <span className="total">{result}</span></p>
      </div>
    );
  }
  
  export default Exponent;