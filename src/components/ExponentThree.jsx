
const ExponentThree = ({ count }) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">{count}³</p>
    <p className="exponent-result">
      {count} * {count} * {count} = {Math.pow(count, 3)}</p>
  </div>
);

export default ExponentThree;