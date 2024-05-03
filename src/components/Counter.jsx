const Counter = (props) => {
  return (
    <div className="counter-container">
      <p className="counter-value">{props.count}</p>
      <button className="counter-button" onClick={props.decrementCallback}>-</button>
      <button className="counter-button" onClick={props.incrementCallback}>+</button>
    </div>
  );
};

export default Counter;
