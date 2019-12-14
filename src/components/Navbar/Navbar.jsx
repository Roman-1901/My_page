import React from 'react';
import classes from './Navbar.module.css';
const Navbar = () => {
    return <nav className={classes.nav}>
                <a href='/profile'><div className={`${classes.item} ${classes.active}`}>Profile</div></a>
                <a href='/messages'><div className={classes.item}>Messages</div></a>
                <a href='/news'><div className={classes.item}>News</div></a>
                <a href='/music'><div className={classes.item}>Music</div></a>
                <a href='/settings'><div className={classes.item}>Settings</div></a>
            </nav>
}

export default Navbar;