import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import Header from './components/Header/Header';
import NavbarContainer from './components/Navbar/NavbarContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
import DialogsContainer from './components/Dialogs/DialogsContainer';


const App = (props) => {

	

	return (
			<div className='App-wrapper'>
				<Header />
				<NavbarContainer />
				<div className="App-wrapper-content">
					<Route path="/profile" render={ () => <ProfileContainer/> } />
					<Route path="/messages" render={() => <DialogsContainer />} />
					<Route path="/news" component={News} />
					<Route path="/music" component={Music} />
					<Route path="/settings" component={Settings} />
				</div>
			</div> );
}

export default App;
