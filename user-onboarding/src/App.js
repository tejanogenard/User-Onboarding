import React, { useState } from 'react';
import logo from './logo.svg';
import Users from './components/Users';
import UserForm from './components/UserForm';
import './App.css';


function App() {
  const [user, setUser] = useState(
    {
      id:1,
      fullName: "",
      email: "",
      Password: "",
    }
  )


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         React User-list
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
