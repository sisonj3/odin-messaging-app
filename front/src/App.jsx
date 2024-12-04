import { useState } from 'react'
import Login from './components/Login'
import './App.css'

function App() {

  let token;

  const getJWT = (jwt) => {
    token = jwt;

    console.log(token);
  };

  return (
    <>
      <Login
        parentGetJWT={getJWT}
      />
    </>
  )
}

export default App
