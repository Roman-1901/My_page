import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const SideBar = (props) => {
    return <div>
                <div className={classes.item}><NavLink to={props.link} activeClassName={classes.active} >{props.title}</NavLink></div>
            </div>
}

export default SideBar;