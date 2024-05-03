

const Counter = (prop) => {
  
  return (
    <div className="counter-container">
    <p className="counter-value">{prop.count}</p>
    <button className="counter-button" onClick={prop.decrement}>-</button>
    <button className="counter-button" onClick={prop.increment}>+</button>
    </div>
  );
};

export default Counter;
