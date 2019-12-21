import React from 'react';
import classes from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';


const DialogItem = (props) => {
        return  <div className={classes.dialog}>
                    <NavLink to={"/messages/" + props.id} activeClassName={classes.active} >
                    <img className={classes.avaFriend} src= {props.ava} />
                    <div className={classes.name}>
                        {props.name}
                    </div>
                    </NavLink>
                </div>
}

export default DialogItem;