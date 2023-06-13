import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  function complexIncr() {
    setTimeout(() => {
      //setCount(count + 1);//this wont work correctly when faster click occurs, becz eventhough functions stack up on each function call, all function refers same old "count" value, 
      setCount((value) => value + 1)//here for every function stack space a new 'vale' variable is created.
    }, 2000);
  }
  return (
    <div className="App">
      <h1>Count</h1>
      <h2>{count}</h2>
      <button onClick={() => { setCount(count + 1) }}>Increase</button>
      <button onClick={() => { setCount(0) }}>Reset</button>
      <button onClick={() => { setCount(count - 1) }}>Decrease</button>
      <h2>Complex Increase</h2>
      <button onClick={complexIncr}>Increase later</button>
    </div>
  );
}

export default App;
