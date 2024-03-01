

const ExponentThree = (props) => {
  const {count} = props;
  return (
    <div className="exponent-counter-container">
    <p className="exponent-label">{count}³</p>
    <p className="exponent-result">{count} * {count} * {count} = <span className="total">{count**3}</span></p>
  </div>
  );
   
};

export default ExponentThree;