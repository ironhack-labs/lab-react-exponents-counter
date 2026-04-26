
const Counter = ({count, decrement, increment}) => {
  


  return (<div className="Counter">
      <p>Count: {count}</p>
      
      {/* On utilise les fonctions reçues du parent au clic */}
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default Counter;
