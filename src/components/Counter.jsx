

const Counter = (props) => {

  return (
    <div className="counter-container">
      <p className="counter-value">{props.count}</p>
      <button className="counter-button" onClick={props.callBackDecrement}>-</button>
      <button className="counter-button" onClick={props.callBackIncrement}>+</button>
    </div>
  );
};

export default Counter;
