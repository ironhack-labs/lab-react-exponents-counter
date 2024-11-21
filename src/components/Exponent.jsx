
const Exponent = ({ count, exp }) => (
    <div className="exponent-counter-container">
      <p className="exponent-label">{count}^{exp}</p>
      <p className="exponent-result">{count} *...({exp} veces)...* {count} = 
        <span className="total">{count**exp}</span></p>
    </div>
  );
  
  export default Exponent;