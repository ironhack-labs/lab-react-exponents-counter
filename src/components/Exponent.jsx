const Exponent = (props) => {
  let result = props.count ** props.exponent;
  let expression = "";
  for(let i = 0; i<=props.exponent; i++){
    expression += `${props.count}`;
    if(i < props.exponent){
      expression += "*";
    }
  }
  return(<>
   <div className="exponent-counter-container">
    <p className="exponent-label">{props.count}<sup>{props.exponent}</sup></p>
    <p className="exponent-result">{expression}  = <span className="total">{result}</span></p>
  </div>
  </>)
};

export default Exponent;