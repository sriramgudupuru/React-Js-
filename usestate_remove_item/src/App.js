import { useState } from 'react';
import './App.css';
import { data } from './Data';
function App() {
  const [people, setPeople] = useState(data);
  function remover(id) {
    let newData = people.filter((ite) => ite.id !== id);
    setPeople(newData);
  }
  return (

    <div className="App">
      {people.map((obj) => {
        return (
          <div key={obj.id}>
            <h1>{obj.value} {obj.id}</h1>
            <button onClick={() => remover(obj.id)}>Remove item{obj.id}</button>
          </div>

        )
      })
      }
      <button button style={{ marginTop: "3rem" }} onClick={() => setPeople([])}>clear All items</button>
    </div>
  );
}

export default App;
