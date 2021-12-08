import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import RoutesPage from './components/RoutesPage'
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    {/* <Routes>
      try moving routes to app and use the graphspage rather than having them in app
      <Route path="/Routes" element={<RoutesPage />}/>
      <Route path="/Home" element={<App />} />
      <Route path="/" element={<App />} />
    </Routes> */}
    <App />
    </BrowserRouter>,
  document.getElementById('root')
);


