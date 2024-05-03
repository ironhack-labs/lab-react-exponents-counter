const Counter = (props) => {
  return (
    <div className="counter-container">
      <p className="counter-value">{props.counter}</p>
      <button className="counter-button" onClick={props.decrement}>-</button>
      <button className="counter-button" onClick={props.increment}>+</button>
    </div>
  );

};

export default Counter;
