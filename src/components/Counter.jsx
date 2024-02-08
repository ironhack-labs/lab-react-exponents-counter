const Counter = (props) => {

  return (
    <div className="counter-container">
      <p className="counter-value">{props.countVal}</p>
      <button className="counter-button" onClick={() =>{props.callBackDec()}}>-</button>
      <button className="counter-button" onClick={() =>{props.callBackInc()}}>+</button>
    </div>
  );
};

export default Counter;
