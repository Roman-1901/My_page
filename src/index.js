import store from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


export let rendering =() => {

ReactDOM.render(<App state = {store.getState()} dispatch = {store.dispatch.bind(store)} />, document.getElementById('root'));
}

rendering();

store.startProject(rendering);





