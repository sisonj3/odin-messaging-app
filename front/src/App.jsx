import { useState } from 'react'
import Login from './components/Login'
import './App.css'

function App() {

  // Variables
  let token;
  let username;

  // States
  const [received, setReceived] = useState([]);
  const [sent, setSent] = useState([]);

  const getJWT = async (jwt, user, receivedMsgs, sentMsgs) => {
    token = jwt;
    username = user;

    setReceived(receivedMsgs);
    setSent(sentMsgs);

    console.log(token);
  };

  return (
    <>
      {received.length < 1 ? (
          <Login
            parentGetJWT={getJWT}
          />
      ) : (
          <div>
            <p>{received[0].text}</p>
            <p>{sent[0].text}</p>
          </div>
        )
      }
    </>
  )
}

export default App
