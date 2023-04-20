import React, { useContext, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../store/Context';

function Login(props) {
  const context = useContext(Context);
  const refUsername = useRef();
  const refPassword = useRef();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const username = refUsername.current.value;
    const password = refPassword.current.value;
    const user = context.dataUser.find(
      (user) => user.username === username && user.password === password
    );
    if (user) {
      context.isLogin = true;
      localStorage.setItem('role', user.role);
      navigate('/homepage');
    }
  };
  return (
    <div>
      <div>
        <div>
          <h1>account test</h1>
          <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
            <div style={{ border: '1px solid black', padding: '10px' }}>
              <p>account: admin</p>
              <p>pass: admin</p>
            </div>
            <div style={{ border: '1px solid black', padding: '10px' }}>
              <p>account: user_1</p>
              <p>pass: user_1</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Username"
          ref={refUsername}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          ref={refPassword}
        />
      </div>
      <button onClick={(e) => handleLogin(e)}>Login</button>
    </div>
  );
}

export default Login;
