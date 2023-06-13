import { useState } from 'react';
import './App.css';

function App() {
  const [person, setPerson] = useState({ fname: '', email: '', age: '' })
  const [people, setPeople] = useState([]);
  function handleChnage(e) {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value })
  }
  function handleSubmit(e) {
    e.preventDefault();

    const newPerson = { ...person, id: new Date().getTime().toString() };

    setPeople([...people, newPerson]);
    setPerson({ fname: '', email: '', age: '' })
  }
  return (
    <div className="App">
      <label htmlFor="firstName">Name</label>
      <input type="text" name='fname' id='firstName' value={person.fname} onChange={handleChnage} />
      <label htmlFor="email">Email</label>
      <input type="text" name='email' id='email' value={person.email} onChange={handleChnage} />
      <label htmlFor="age">age</label>
      <input type="text" name='age' id='age' value={person.age} onChange={handleChnage} />
      <button onClick={handleSubmit}>Submit</button>
      <div>
        {people.map((person) => {
          const { id, fname, email, age } = person;
          return (
            <div key={id}>
              <h4>{fname}</h4>
              <h4>{age}</h4>
              <p>{email}</p>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
