const ExponentThree = ({ count }) => {
  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">n³</p>
      <p className="exponent-result">
      {count}<sup>3</sup> = <span className="total">{Math.pow(3, count)}</span>
      </p>
    </div>
  );
};

export default ExponentThree;