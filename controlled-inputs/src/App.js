import { useState } from 'react';
import './App.css';

function App() {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [people, setPeople] = useState([]);
  function handleSubmit(e) {
    e.preventDefault();
    if (fname && lname) {
      const person = { id: new Date().getTime().toString(), fname, lname };
      setPeople((people) => {
        return [...people, person];
      }
      );
      setFname('');
      setLname('');

    } else {
      alert('enter both details correctly')

    }


  }
  return (
    <section className="App">
      <article>
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstName">First Name: </label>
          <input type="text" id='firstName' value={fname} onChange={(e) => setFname(e.target.value)} />
          <div><label htmlFor="lastName">Last Name: </label>
            <input type="text" id='lastName' value={lname} onChange={(e) => setLname(e.target.value)} />
          </div>
          <button type='submit'>Submit</button>
        </form>
      </article>
      <article>
        {people.map((person) => {
          const { id, fname, lname } = person;
          return (
            <div key={id}>{fname} {lname}</div>
          )
        })}
      </article>
    </section>
  );
}

export default App;
