import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {CatsGames} from "./catsGame";

ReactDOM.render(
  <React.StrictMode>
      <CatsGames>
          <div className='catsDiv'/>
      </CatsGames>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();


