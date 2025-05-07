const ExponentThree = ({ count }) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">n³</p>
    <p className="exponent-result">
      {count} = <span className="total">{count ** 3}</span>
    </p>
  </div>
);

export default ExponentThree;
