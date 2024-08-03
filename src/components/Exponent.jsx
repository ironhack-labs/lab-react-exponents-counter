function Exponent({ count, exponent }) {
  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">{`${count}⁵`}</p>
      <p className="exponent-result">
        {`${count} ^ ${exponent}`} ={" "}
        <span className="total">{count ** exponent}</span>
      </p>
    </div>
  );
}

export default Exponent;
