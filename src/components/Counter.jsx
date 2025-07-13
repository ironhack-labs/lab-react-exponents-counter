const Counter = (props) => {
  return (
    <div className="counter-container">
      <p className="counter-value">{props.count}</p>
      <button className="counter-button" onClick={props.onDecrease}>
        -
      </button>
      <button className="counter-button" onClick={props.onIncrease}>
        +
      </button>
    </div>
  );
};

export default Counter;
