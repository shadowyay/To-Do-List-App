import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const loginUser = (credentials) => axios.post(`${API_URL}/login`, credentials);
export const registerUser = (userData) => axios.post(`${API_URL}/register`, userData);
export const fetchTodos = (token) => axios.get(`${API_URL}/todos`, { headers: { Authorization: `Bearer ${token}` } });
export const addTodo = (todo, token) => axios.post(`${API_URL}/todos`, todo, { headers: { Authorization: `Bearer ${token}` } });
export const deleteTodo = (id, token) => axios.delete(`${API_URL}/todos/${id}`, { headers: { Authorization: `Bearer ${token}` } });
