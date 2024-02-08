const ExponentTwo = ({count}) => {

 const squared = count ** 2;
 return(
   <div className="exponent-counter-container">
    <p className="exponent-label">n²</p>
    <p className="exponent-result"> {count} * {count} = <span className="total">{squared}</span></p>
  </div>

);
}
export default ExponentTwo;