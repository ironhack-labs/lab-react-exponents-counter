const ExponentThree = ({ count }) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">³</p>
    <p className="exponent-result">
      {count} ^3 = <span className="total">{count ** 3}</span>
    </p>
  </div>
);

export default ExponentThree;
