const ExponentFive = ({count}) => {
  const fourthPower= count ** 4
return(
  <div className="exponent-counter-container">
    <p className="exponent-label">n⁵</p>
    <p className="exponent-result">{count} * {count} * {count} * {count} = <span className="total">{fourthPower}</span></p>
    </div>
);
}
export default ExponentFive;