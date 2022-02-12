import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { localStorageKeys } from './constants';
import { logIn } from './api';

const storedUserId = window.localStorage.getItem(localStorageKeys.USER_ID);
if (storedUserId) {
  logIn(storedUserId);
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
