function Counter({ count, increment, decrement }) {
  return (
    <div className="counter-box">
      <h2>Counter</h2>
      <h1>{count}</h1>

      <div className="btns">
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
}

export default Counter;
