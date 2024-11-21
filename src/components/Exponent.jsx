const Exponent = ({ num, exponent }) => {

let calculation = `${num}`;
  for (let i = 1; i < exponent; i++) {
    calculation += ` * ${num}`;
  }

  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">n^{exponent}</p>
      <p className="exponent-result">
        {calculation} = <span className="total">{Math.pow(num, exponent)}</span>
      </p>
    </div>
  );
};

export default Exponent;