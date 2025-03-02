const ExponentTwo = (props) => {

    let numero = props.count;
    let resultado = numero*numero;

    
    return (

      <div className="exponent-counter-container">
        <p className="exponent-label">{props.count}²</p>
        <p className="exponent-result">{props.count} * {props.count} = <span className="total">{resultado}</span></p>
      </div>
  )
  
};

export default ExponentTwo;
