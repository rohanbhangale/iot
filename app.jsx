import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === '') return;
    setTasks([...tasks, { id: Date.now(), text: task }]);
    setTask('');
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const editTask = (id) => {
    const toEdit = tasks.find((t) => t.id === id);
    const newText = prompt('Edit your task:', toEdit.text);
    if (newText !== null && newText.trim() !== '') {
      setTasks(
        tasks.map((t) =>
          t.id === id ? { ...t, text: newText.trim() } : t
        )
      );
    }
  };

  return (
    <div className="app">
      <h1>📝 To-Do App</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>
      <ul className="task-list">
        {tasks.map((t) => (
          <li key={t.id}>
            <span>{t.text}</span>
            <div>
              <button className="edit-btn" onClick={() => editTask(t.id)}>Edit</button>
              <button className="delete-btn" onClick={() => deleteTask(t.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
