import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import App from './App';
import { USER_LOCAL_STORAGE_KEY, generateTrainerName } from './constants';
import { logIn } from './api';
import { User } from 'pokemon-master-trainer-common/types';
import './index.css';

const storedUser = window.localStorage.getItem(USER_LOCAL_STORAGE_KEY);
if (storedUser) {
  const user: User = JSON.parse(storedUser);
  logIn(user);
} else {
  const userId = uuidv4();
  const username = generateTrainerName();
  logIn({ userId, username });
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
