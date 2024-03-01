const Exponent = ({count, exponent}) => {


    function multiplier(exponent, count){
        let str = `${count}`
        for(let i = 1; i < exponent; i++) {
            str += ` * ${count}`
        }
        console.log(str)
        return str

    }
    return (
    <div className="exponent-counter-container">
    <p className="exponent-label">{count}<sup>{exponent}</sup></p>
    <p className="exponent-result">{multiplier(exponent, count)} = <span className="total">{count ** exponent}</span></p>
   </div>
    )
};
 
 export default Exponent;