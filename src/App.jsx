// import "./App.css";
// import Counter from "./components/Counter";
// import ExponentTwo from "./components/ExponentTwo";
// import ExponentThree from "./components/ExponentThree";
// import ExponentFour from "./components/ExponentFour";
// import ExponentFive from "./components/ExponentFive";
// import ExponentSix from "./components/ExponentSix";


// function App () {
//   return (
//     <div className="App">
//       <h2><em>Counter</em></h2>
  
//       <Counter/>

//       <br />
//       <h2><em>Exponents</em></h2>

//       <div className="container">
//         <ExponentTwo />
//         <ExponentThree />
//         <ExponentFour />
//         <ExponentFive />
//         <ExponentSix />
//       </div>
//     </div>
//   );
// }

// export default App;
import React, { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import ExponentTwo from "./components/ExponentTwo";
import ExponentThree from "./components/ExponentThree";
import ExponentFour from "./components/ExponentFour";
import ExponentFive from "./components/ExponentFive";
import ExponentSix from "./components/ExponentSix";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h2><em>Counter</em></h2>

      <Counter count={count} setCount={setCount} />

      <br />
      <h2><em>Exponents</em></h2>

      <div className="container">
        <ExponentTwo count={count} />
        <ExponentThree count={count} />
        <ExponentFour count={count} />
        <ExponentFive count={count} />
        <ExponentSix count={count} />
      </div>
    </div>
  );
}

export default App;
