


const Exponent = ({count, exponent}) => {


    let multiplier = `${count} * `.repeat(exponent).slice(0, -3)
    
    return (
    <div className="exponent-counter-container">
    <p className="exponent-label">{count}<sup>{exponent}</sup></p>
    <p className="exponent-result">{multiplier} = <span className="total">{count ** exponent}</span></p>
   </div>
    )
};
 
 export default Exponent;

