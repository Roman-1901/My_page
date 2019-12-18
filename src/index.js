import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


let postData = [
    {id: 1, message: "My first post", count: 10},
    {id: 2, message: "My second post", count: 8}
]   

let dialogItem = [
    {id: 1, name: "Jenya"},
    {id: 2, name: "Anton"},
    {id: 3, name: "Dima"},
    {id: 4, name: "Lecha"},
    {id: 5, name: "Olga"}
] 

let messageItem = [
    {id: 1, message: "Hi"},
    {id: 2, message: "Huy sosi"},
    {id: 3, message: "Guboy tryasi"}
]

ReactDOM.render(<App postData = {postData} dialogItem = {dialogItem} messageItem={messageItem} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
