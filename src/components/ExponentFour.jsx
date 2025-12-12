const ExponentFour = ({ num }) => (
   <div className="exponent-counter-container">
    <p className="exponent-label">{num}⁴</p>
    <p className="exponent-result">{`${num} * ${num} * ${num} * ${num}`} = <span className="total">{num**4}</span></p>
  </div>
);

export default ExponentFour;