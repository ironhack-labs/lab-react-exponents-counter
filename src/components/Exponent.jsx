const Exponent = ( props ) => {
    const  {count, exponent } = props;

    const multiplicationString = Array.from({length: exponent}, () => count).join(" * ");
    const result = count ** exponent
  
    return (
     <div className="exponent-counter-container">
      <p className="exponent-label">{`${props.count}^${props.exponent}`}</p>
      <p className="exponent-result"> {`${multiplicationString}`} = <span className="total">{result}</span></p>
    </div>
  );
  
  }
  
  export default Exponent;