import store from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


export let rendering =() => {

ReactDOM.render(<App state = {store._state} addPost = {store.addPost.bind(store)} addText = {store.addText.bind(store)} onChangePost = {store.onChangePost.bind(store)} onChangeText = {store.onChangeText.bind(store)} />, document.getElementById('root'));
}

rendering();

store.startProject(rendering);





