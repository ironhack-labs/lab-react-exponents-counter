const ExponentThree = () => (
  const ExponentThree = ({count}) => (
     <div className="exponent-counter-container">
      <p className="exponent-label">n³</p>
      <p className="exponent-result">2 * 2 * 2 = <span className="total">8</span></p>
      <p className="exponent-label">{`${count}`}³</p>
      <p className="exponent-result">{`${count}`} * {`${count}`} * {`${count}`} = <span className="total">{`${count}`**3}</span></p>
    </div>
  );
  
  export default ExponentThree;