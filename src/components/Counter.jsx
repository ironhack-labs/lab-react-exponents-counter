// import { useState } from "react";

const Counter = (props) => {
  // const [count, setCount] = useState(0); //lifted to the APP component
  const {count, decrement, increment} = props;
  


  // const decrement = () => setCount((prevCount) => prevCount - 1); //lifted to the APP component
  // const increment = () => setCount((prevCount) => prevCount + 1); //lifted to the APP component

  return (
    <div className="counter-container">
      <p className="counter-value">{count}</p>
      <button className="counter-button" onClick={decrement}>-</button>
      <button className="counter-button" onClick={increment}>+</button>
    </div>
  );
};

export default Counter;
