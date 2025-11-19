import { useState } from "react";
// src/App.jsx
import Counter from "./components/Counter";
import Exponent from "./components/Exponent";

function App() {
const [count, setCount] = useState(0);

function increment() {
setCount((prev) => prev + 1);
}

function decrement() {
setCount((prev) => prev - 1);
}

return (
<div>
<Counter count={count} increment={increment} decrement={decrement} />

<Exponent num={count} exponent={2} />
<Exponent num={count} exponent={3} />
<Exponent num={count} exponent={4} />
<Exponent num={count} exponent={5} />
<Exponent num={count} exponent={6} />
</div>
);
}

export default App;
