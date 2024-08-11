const Counter = ({count, callbackToDecrement, callbackToIncrement}) => {
  
  return (
    <div className="counter-container">
      <p className="counter-value">{count}</p>
      <button className="counter-button" onClick={callbackToDecrement}>-</button>
      <button className="counter-button" onClick={callbackToIncrement}>+</button>
    </div>
  );
};

export default Counter;
