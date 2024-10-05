import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Person from './Person'
import Button from './Button'
import reportWebVitals from './reportWebVitals';
import Header from './Header'
import List from './List'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Person name="Roshan" age="20" />
    <br/>
    <Button text="Hello Brother" onClick={()=>{console.log("Button Clicked")}}/>
    <br/>
    <Header title="Its just starting"/>
    <br/>
    <List items={["Roshan","Kumar","Sahu"]}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
