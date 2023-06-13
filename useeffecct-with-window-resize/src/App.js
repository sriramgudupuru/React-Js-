import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [size, setSize] = useState(window.innerWidth);
  function checkSize() {
    setSize(window.innerWidth);
  }
  window.addEventListener('resize', checkSize); // or like below to know how useeffect works with out brackets(i.e it runs whenever there is a re-render (here while resizing))
  useEffect(() => {
    console.log('re-render occured so i\'m running again');
    //window.addEventListener('resize', checkSize);
  })
  return (
    <div className="App">
      <h1>Window size</h1>
      <h2>{size}</h2>
    </div>
  );
}

export default App;
