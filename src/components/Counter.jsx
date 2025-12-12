const Counter = ({ num, decrement, increment }) => {

  return (
    <div className="counter-container">
      <p className="counter-value">{num}</p>
      <button className="counter-button" onClick={decrement}>-</button>
      <button className="counter-button" onClick={increment}>+</button>
    </div>
  );
};

export default Counter;
