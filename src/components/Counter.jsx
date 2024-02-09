import { useState } from "react";

const Counter = ({ count, setCount }) => {
  const [localCount, setLocalCount] = useState(0);

  const decrement = () => { 

    setLocalCount(prevCount => prevCount - 1);
    setCount(prevCount => prevCount - 1);
  };

  const increment = () => {

    setLocalCount(prevCount => prevCount + 1);

    setCount(prevCount => prevCount + 1);

  };


  return (

    <div className="counter-container">
      <p className="counter-value">{count}</p>
      <button className="counter-button" onClick={decrement}>-</button>
      <button className="counter-button" onClick={increment}>+</button>

      <p className="local-counter-value">Local Count: {localCount}</p>
    </div>
  );

};



export default Counter;