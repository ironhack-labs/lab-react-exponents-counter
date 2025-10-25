const ExponentThree = ({ count }) => {
  const result = count * count * count;
  const calculation = `${count} * ${count} * ${count}`;

  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">n³</p>
      <p className="exponent-result">{calculation} = <span className="total">{result}</span></p>
    </div>
  );
};

export default ExponentThree;