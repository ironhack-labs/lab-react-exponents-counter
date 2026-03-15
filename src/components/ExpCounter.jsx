const ExpCounter = (props) => {  

  return (
    <div className="counter-container">
      <p className="counter-value">{props.exponent}</p>
      <button className="counter-button" onClick={props.onDecrement}>-</button>
      <button className="counter-button" onClick={props.onIncrement}>+</button>
    </div>
  );
};

export default ExpCounter;