import state, { startProject, addText, addPost, onChangePost, onChangeText } from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


export let rendering =() => {

ReactDOM.render(<App state = {state} addPost = {addPost} addText = {addText} onChangePost = {onChangePost} onChangeText = {onChangeText} />, document.getElementById('root'));
}

rendering();

startProject(rendering);





