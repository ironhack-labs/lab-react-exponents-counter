const ExponentTwo = ({count, exponent}) => {

   const result = count ** exponent;

   const text = `${count} * `

   return (

   <div className="exponent-counter-container">
    <p className="exponent-label">{count}<sup>{exponent}</sup></p>
    <p className="exponent-result">{text.repeat(exponent-1)} {count} = <span className="total">{result}</span></p>
  </div>

   )

};

export default ExponentTwo;