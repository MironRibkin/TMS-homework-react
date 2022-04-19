import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Box} from "./Boxes";

ReactDOM.render(
  <React.StrictMode>
      <Box className={'smallBox'} label={'Smallbox'}/>
      <Box className={'normalBox'} label={'Normalbox'}/>
      <Box className={'bigBox'} label={'Bigbox'}/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
