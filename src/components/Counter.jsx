// import { useState } from "react";

const Counter = (props) => {
  // const [count, setCount] = useState(0);

  //const decrement = () => setCount((prevCount) => prevCount - 1);
  //const increment = () => setCount((prevCount) => prevCount + 1);

  return (
    <div className="counter-container">
      <p className="counter-value">{props.count}</p>
      <button
        className="counter-button"
        onClick={() => props.decrementCount(props.count)}
      >
        -
      </button>
      <button
        className="counter-button"
        onClick={() => props.incrementCount(props.count)}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
