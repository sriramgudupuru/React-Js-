import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [item, setItem] = useState(false);
  return (
    <div className="App">
      <button onClick={() => { setItem(!item) }}>Show/Hide</button>
      {item && <Size />}

    </div>
  );
}

function Size() {
  const [size, setSize] = useState(window.innerWidth);
  function calcSize() {
    setSize(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener('resize', calcSize)
    return () => {
      window.removeEventListener('resize', calcSize);
    }
  }, []);
  return <h2>Window Size: {size}</h2>
}

export default App;
