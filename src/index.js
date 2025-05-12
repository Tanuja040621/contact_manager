import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


import reportWebVitals from './reportWebVitals';

/* font awsome icons */
import '../node_modules/@fortawesome/fontawesome-free/css/all.css'

/* bootstrap 5.*/
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>
    <App />
    </BrowserRouter>

  </React.StrictMode>
);

reportWebVitals();
