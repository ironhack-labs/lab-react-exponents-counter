

const ExponentTwo = ({count, exponent}) => (
   <div className="exponent-counter-container">
    <p className="exponent-label"> {count}² </p> 
    <p className="exponent-result">{count} * {count} = <span className="total"> {Math.pow(count, exponent)} </span></p>
  </div>
);

export default ExponentTwo;