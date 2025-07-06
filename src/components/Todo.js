import React, { useEffect, useState } from 'react';
import { fetchTodos, addTodo, deleteTodo } from '../api';

export default function Todo({ token }) {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const loadTodos = async () => {
    const { data } = await fetchTodos(token);
    setTodos(data);
  };

  useEffect(() => {
    loadTodos();
  }, []);

  const handleAdd = async () => {
    if (newTodo) {
      await addTodo({ text: newTodo }, token);
      setNewTodo('');
      loadTodos();
    }
  };

  const handleDelete = async (id) => {
    await deleteTodo(id, token);
    loadTodos();
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-2">To-Do List</h2>
      <div className="flex mb-4">
        <input value={newTodo} onChange={e => setNewTodo(e.target.value)} className="flex-grow p-2 border" />
        <button onClick={handleAdd} className="bg-blue-500 text-white px-4">Add</button>
      </div>
      <ul className="space-y-2">
        {todos.map(todo => (
          <li key={todo.id} className="flex justify-between items-center p-2 border rounded">
            {todo.text}
            <button onClick={() => handleDelete(todo.id)} className="text-red-500">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
