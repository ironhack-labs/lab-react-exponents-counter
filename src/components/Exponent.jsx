const Exponent = ( props ) => {
    const result = props.count ** props.exponent;
  
    return (
     <div className="exponent-counter-container">
      <p className="exponent-label">{`n^${props.exponent}`}</p>
      <p className="exponent-result"> {`${props.count}^${props.exponent}`} = <span className="total">{result}</span></p>
    </div>
  );
  
  }
  
  export default Exponent;