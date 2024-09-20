const Exponent = ({ num, exponent }) => {
  return (
    <div className="exponent-counter-container">
      <p className="exponent-label"></p>
      <p className="exponent-result">
        <span className="total">
          {num}
          <sup>{exponent}</sup> = {" "}
        </span>
        <span className="total">{Math.pow(num, exponent)}</span>
      </p>
    </div>
  );
};

export default Exponent;
