const Exponent = ({count, exponent}) => {
    return (  
        <div className="exponent-counter-container">
            <p className="exponent-label">{count}^{exponent}</p>
    <p className="exponent-result">{`${count} *` .repeat(exponent)}= <span className="total">{Math.pow(count, exponent)}</span></p>
  </div>



    )
}
export default Exponent;