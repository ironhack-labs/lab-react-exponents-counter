function createExponentText(num, exponent)  {
  let finalExponentText = "";
  for (let i = 1; i <= exponent; i++) {
    finalExponentText = finalExponentText + num;
      if (i != exponent) {
        finalExponentText = finalExponentText + " * "
      }
  }
  return finalExponentText;
}

const Exponent = ({ num, exponent } ) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">{num}<sup>{exponent}</sup></p>
    <p className="exponent-result">{createExponentText(num, exponent)}= <span className="total">{num ** exponent }</span></p>
  </div>
);

export default Exponent;