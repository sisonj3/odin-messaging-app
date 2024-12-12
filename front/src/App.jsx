import { useState } from 'react'
import Login from './components/Login'
import Home from './components/Home'
import './App.css'

function App() {

  // States
  const [token, setToken] = useState(undefined);
  const [id, setId] = useState(undefined);
  const [username, setUsername] = useState(undefined);
  const [received, setReceived] = useState([]);
  const [sent, setSent] = useState([]);
  const [users, setUsers] = useState([]);

  const getJWT = async (jwt, id, username, receivedMsgs, sentMsgs) => {
    
    setToken(jwt);
    setId(id);
    setUsername(username);
    setReceived(receivedMsgs);
    setSent(sentMsgs);

    // Fetch other users
    fetch('http://localhost:3000/user', {
        mode: 'cors',
        method: 'GET',
        headers: {
                'authorization': `Bearer ${jwt}`,
            }
        })
        .then(response => response.json())
        .then(response => {
            console.log(response);

            let temp = [];

            response.forEach(user => {
                if (user.username != username) {
                    temp.push(user);
                }
            });
          
          setUsers(temp);

        })
        .catch(error => console.error(error));

    console.log(token);
  };

  return (
    <>
      {token == undefined ? (
          <Login
            parentGetJWT={getJWT}
          />
      ) : (
          <Home
            token={token}
            id={id}
            user={username}
            users={users}
            sent={sent}
            received={received}
          />
        )
      }
    </>
  )
}

export default App
