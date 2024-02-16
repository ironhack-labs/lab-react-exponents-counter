const Counter = (props) => {
  let count = props.count;
  const decrement = () => props.setCount((count) => count - 1);
  const increment = () => props.setCount((count) => count + 1);

  return (
    <div className="counter-container">
      <p className="counter-value">{count}</p>
      <button className="counter-button" onClick={decrement}>
        -
      </button>
      <button className="counter-button" onClick={increment}>
        +
      </button>
    </div>
  );
};

export default Counter;
