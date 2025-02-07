

function Exponent({ num, exponent }) {
    const result = num ** exponent;

    return (
      <div className="exponent-counter-container">
        <p className="exponent-label">n{exponent}</p>
        <p className="exponent-result">
          {" "}
          {num} ^ {exponent} = <span className="total">{result}</span>
        </p>
      </div>
    );
  }
  
  export default Exponent;