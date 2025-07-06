import React, { useState } from 'react';
import { loginUser } from '../api';

export default function Login({ setToken, setShowRegister }) {
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await loginUser(form);
      setToken(data.token);
    } catch (err) {
      if (err.response && err.response.status === 401) {
        setError('Account not found. Click register below.');
      } else {
        setError('Login failed.');
      }
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '1rem' }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px' }}>
        <input
          type="text"
          name="username"
          placeholder="Username or Email"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
      </form>
      {error && (
        <div style={{ marginTop: '10px', color: 'red' }}>
          <p>{error}</p>
          <button onClick={() => setShowRegister(true)}>
            Register Instead
          </button>
        </div>
      )}
    </div>
  );
}
