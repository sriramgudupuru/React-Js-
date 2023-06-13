import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  async function getUsers() {
    const response = await fetch('https://api.github.com/users');
    const users = await response.json();
    setUsers(users);
    console.log(users);
  }
  useEffect(() => {
    getUsers();//here we placing function call within useEffect becz when getusers() function called 'users' state value changed so its component(i.e App) rendering occurs again i.e App component runs again, and agin a function call to gettusers() occurs, and so on it contiuesly run for infinite time. 
  }, [])
  return (
    <div className="App">
      <ul>
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (

            < li key={id} >
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
              </div>
            </li>

          )
        })}
      </ul>
    </div >
  );
}

export default App;
