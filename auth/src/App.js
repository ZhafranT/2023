import React, { useState } from 'react';
import './App.css';
import Login from './Login';
import Register from './Register';
import Success from './Success';

function App() {
   const [page, setPage] = useState('login');

   const buttonAuth = (btnName) => {
      setPage(btnName);
   };

   return (
      <div className="App">
         {page === 'login' ? <Login switchPage={buttonAuth} /> : <Register switchPage={buttonAuth} />}
      </div>
   );
}

export default App;
