import { useEffect, useReducer, useState } from 'react';
import './App.css';

const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: 'hello',
}

function reducer(state, action) {
  if (action.type === 'ADD_ITEM') {
    // alert("inner");
    const newPeople = [...state.people, action.payload]
    return { ...state, people: newPeople, isModalOpen: true, modalContent: 'item added' };

  }
  if (action.type === 'NO_VALUE') {
    // alert('hello')
    return { ...state, isModalOpen: true, modalContent: 'please enter value' };
  }
  //   alert('hello');
  if (action.type === 'CLOSE_MODAL') {
    return { ...state, isModalOpen: false }
  }
  if (action.type === 'REMOVE_ITEM') {
    const newPeople = state.people.filter(
      (person) => person.id !== action.payload
    );
    return { ...state, people: newPeople };

  }


}

function Modal(props) {
  useEffect(() => {
    setTimeout(() => {
      props.closeModal();
    }, 3000);
  })
  return <h4>{props.modalContent}</h4>
}

function App() {
  const [name, setName] = useState('');
  const [state, dispatch] = useReducer(reducer, defaultState);

  function handleSubmit(e) {
    e.preventDefault();
    if (name) {
      const newItem = { id: new Date().getTime().toString(), name };
      dispatch({ type: 'ADD_ITEM', payload: newItem });

      setName('');
    } else {
      dispatch({ type: 'NO_VALUE' });
    }

  }

  function closeModal() {
    dispatch({ type: 'CLOSE_MODAL' });
  }

  return (
    <div className="App">
      {state.isModalOpen && <Modal modalContent={state.modalContent} closeModal={closeModal} />}
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} />
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
      {state.people.map((person) => {
        return <>
          <h4 key={person.id} style={{ display: "inline" }}>{person.name}</h4>
          <button onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: person.id })} style={{ position: 'relative', left: '2rem' }}>Remove item</button>
          <br />
        </>
      })}
    </div>
  );
}

export default App;
