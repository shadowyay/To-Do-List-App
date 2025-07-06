import React, { useState } from 'react';
import { registerUser } from '../api';

export default function Register({ setShowRegister }) {
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser(form);
      setMessage('Registered successfully! Redirecting to login...');
      setTimeout(() => setShowRegister(false), 2000);
    } catch (err) {
      setMessage('Registration failed.');
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold">Register</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="username" placeholder="Username" onChange={handleChange} className="w-full p-2 border" />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} className="w-full p-2 border" />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} className="w-full p-2 border" />
        <button type="submit" className="bg-green-500 text-white px-4 py-2">Register</button>
        {message && <p>{message}</p>}
      </form>
    </div>
  );
}
