import "./App.css";
import Counter from "./components/Counter";
import ExponentTwo from "./components/ExponentTwo";
import ExponentThree from "./components/ExponentThree";
import ExponentFour from "./components/ExponentFour";
import ExponentFive from "./components/ExponentFive";
import ExponentSix from "./components/ExponentSix";
import './App.css';
import Counter from './components/Counter';
import { useState } from 'react';
import ExponentTwo from './components/ExponentTwo';
import ExponentThree from './components/ExponentThree';
import ExponentFour from './components/ExponentFour';
import ExponentFive from './components/ExponentFive';
import ExponentSix from './components/ExponentSix';
import Exponent from './components/Exponent';

function App() {
	const [count, setCount] = useState(0);

function App () {
  return (
    <div className="App">
      <h2><em>Counter</em></h2>

      <Counter/>
	const decrement = () => setCount((prevCount) => prevCount - 1);
	const increment = () => setCount((prevCount) => prevCount + 1);

      <br />
      <h2><em>Exponents</em></h2>
	return (
		<div className="App">
			<h2>
				<em>Counter</em>
			</h2>

      <div className="container">
        <ExponentTwo />
        <ExponentThree />
        <ExponentFour />
        <ExponentFive />
        <ExponentSix />
      </div>
    </div>
  );
			<Counter
				count={count}
				decrement={decrement}
				increment={increment}
			/>

			<br />
			<h2>
				<em>Exponents</em>
			</h2>

			<div className="container">
				<Exponent
					num={count}
					exponent={2}
				/>
				<Exponent
					num={count}
					exponent={3}
				/>
				<Exponent
					num={count}
					exponent={4}
				/>
				<Exponent
					num={count}
					exponent={5}
				/>
				<Exponent
					num={count}
					exponent={6}
				/>
			</div>
		</div>
	);
}

export default App;