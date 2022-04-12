import './Login.css';
import Button from '../NavbarButtons/NavbarButtons';
import { useState } from 'react';

function Login({ username }) {
  const [isLoggedIn, setLoggedIn] = useState(false);
  if (isLoggedIn) {
    return (
      <div>
        <label>Welcome back,{username}!</label>
        <Button onClick={() => setLoggedIn(false)}>Logout</Button>
      </div>
    );
  }
  return <Button onClick={() => setLoggedIn(true)}>Login</Button>;
}

export default Login;
