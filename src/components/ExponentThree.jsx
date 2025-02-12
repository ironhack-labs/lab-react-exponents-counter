const ExponentThree = ({ count }) => {
  const result3 = count * count * count;
  return(
   <div className="exponent-counter-container">
    <p className="exponent-label">{ count }³</p>
    <p className="exponent-result">{count} * {count} * {count} = <span className="total">{result3}</span></p>
  </div>
);
}
export default ExponentThree;