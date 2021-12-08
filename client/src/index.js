import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import RoutesPage from './components/RoutesPage'
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <App />
    </BrowserRouter>,
  document.getElementById('root')
);


