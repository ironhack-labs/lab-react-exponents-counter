
function Counter({ count, increment, decrement }) {
  return (
    <>
      <h2>Count: {count}</h2>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </>
  );
}

export default Counter;
