function Counter({ count, increment, decrement }) {
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default Counter; // <-- Add this line
