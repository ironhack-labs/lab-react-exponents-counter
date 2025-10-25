const ExponentFive = ({ count }) => {
  const result = count * count * count * count * count;
  const calculation = `${count} * ${count} * ${count} * ${count} * ${count}`;

  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">n⁵</p>
      <p className="exponent-result">{calculation} = <span className="total">{result}</span></p>
    </div>
  );
};

export default ExponentFive;