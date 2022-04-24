import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {TaskList} from "./taskList";

ReactDOM.render(
    <React.StrictMode>
        <TaskList done={true} number={1} text='Написать список'/>
        <TaskList done={false} number={2} text='Зачеркнуть первый вариант'/>
        <TaskList done={false} number={3} text='Сделать вид, что очень занят работой'/>
        <TaskList done={false} number={4} text='Придумать, что-нибудь в четвёртом пункте'/>
        <TaskList done={false} number={5} text='Сделать вид, что придумал оригинальный четвертый пункт'/>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
