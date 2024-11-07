const Counter = ({ counter, setCounter }) => {
  const decrement = () => setCounter((prevCount) => prevCount - 1);
  const increment = () => setCounter((prevCount) => prevCount + 1);

  return (
    <div className="counter-container">
      <p className="counter-value">{counter}</p>
      <button className="counter-button" onClick={decrement}>-</button>
      <button className="counter-button" onClick={increment}>+</button>
    </div>
  );
};

export default Counter;
