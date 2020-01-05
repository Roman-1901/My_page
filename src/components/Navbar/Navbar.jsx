import React from 'react';
import classes from './Navbar.module.css';
import SideBar from './Sidebar';

const Navbar = (props) => {

    let navbar = props.state.navBar.map(n => <SideBar link = {n.link} title = {n.title} /> );
   

    return  <nav className={classes.nav}>
                {navbar}
             </nav>            
}


export default Navbar;