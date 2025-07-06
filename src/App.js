import React, { useState } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import Todo from './components/Todo';

function App() {
  const [token, setToken] = useState(null);
  const [showRegister, setShowRegister] = useState(false);

  if (!token) {
    return showRegister ? (
      <Register setShowRegister={setShowRegister} />
    ) : (
      <Login setToken={setToken} setShowRegister={setShowRegister} />
    );
  }

  return <Todo token={token} />;
}

export default App;
