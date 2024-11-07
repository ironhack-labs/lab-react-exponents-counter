const Counter = ({ count, increment, decrement }) => {

  return (

    <div className="Counter">

      <div className="counter-container">

        <p className="counter-value">{count}</p>

        <button className="counter-button" onClick={decrement}>
          -
        </button>

        <button className="counter-button" onClick={increment}>
          +
        </button>

      </div>

    </div>

  );

};

export default Counter;
