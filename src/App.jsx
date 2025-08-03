import { useState } from 'react';
import Counter from './components/Counter';
import Exponent from './components/Exponent'; // نسخة واحدة بدلاً من ExponentTwo..Six

function App() {
  const [count, setCount] = useState(1);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);

  return (
    <>
      <Counter count={count} increment={increment} decrement={decrement} />
      <Exponent count={count} exponent={2} />
      <Exponent count={count} exponent={3} />
      <Exponent count={count} exponent={4} />
      <Exponent count={count} exponent={5} />
      <Exponent count={count} exponent={6} />
    </>
  );
}

export default App;
