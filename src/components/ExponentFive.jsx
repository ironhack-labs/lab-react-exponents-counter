const ExponentFive = ({base}) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">n⁵</p>
    <p className="exponent-result">
    {base} * {base} * {base} * {base} * {base} = <span className="total">{base ** 5}</span>
    </p>
  </div>
);

export default ExponentFive;