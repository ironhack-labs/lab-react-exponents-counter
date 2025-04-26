

const Counter = (props) => {
  



  return (
    <div className="counter-container">
      <p className="counter-value">{props.count}</p>
      <button className="counter-button" onClick={props.decrementCount}>-</button>
      <button className="counter-button" onClick={props.incrementCount}>+</button>
    </div>
  );
};

export default Counter;
