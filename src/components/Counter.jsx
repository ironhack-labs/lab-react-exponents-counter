
const Counter = ({ counter, increment, decrement }) => {
  return (
    <div className="counter-container">
      <p className="counter-value">{counter}</p>
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
