import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const dec = () => setCount((prevCount) => prevCount - 1);
  const inc = () => setCount((prevCount) => prevCount + 1);

  return (
    <div className="counter-container">
      <p className="counter-value">{count}</p>
      <button className="counter-button" onClick={dec}>-</button>
      <button className="counter-button" onClick={inc}>+</button>
    </div>
  )
}

export default Counter
