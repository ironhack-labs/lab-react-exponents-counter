const Exponent = ({ count, power}) => {
    let base = "2 * "
    let elements = Array(power).fill().map((_, index) => (
        <span key={index}>{base}</span>
      ));
  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">{count}<sup style={{fontSize: "16px"}}>{power}</sup></p>
      <p className="exponent-result">
        {elements} = {" "}
        <span className="total">{count ** power}</span>
      </p>
    </div>
  );
};

export default Exponent;
