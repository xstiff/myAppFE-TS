import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';
import { UserContextProvider } from './context/UserContext'
import { TaskContextProvider } from './context/TaskContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <UserContextProvider>
      <TaskContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </TaskContextProvider>
    </UserContextProvider>
  </React.StrictMode>

);

