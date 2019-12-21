import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';

const App = (props) => {

	

	return (
	<BrowserRouter>
		<div className='App-wrapper'>
			<Header />
			<Navbar state = {props.state.SideBar} />
			<div className="App-wrapper-content">
				<Route path="/profile" render={ () => <Profile state = {props.state.ProfilePage}/> } />
				<Route path="/messages" render={() => <Dialogs state = {props.state.DialogsPage} />} />
				<Route path="/news" component={News} />
				<Route path="/music" component={Music} />
				<Route path="/settings" component={Settings} />
			</div>
		</div>
	</BrowserRouter>	);
}

export default App;
