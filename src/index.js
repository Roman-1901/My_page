import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


export let rendering =() => {

ReactDOM.render(<App state = {store.getState()} store = {store} />, document.getElementById('root'));
} 

rendering();

store.subscribe (rendering);





