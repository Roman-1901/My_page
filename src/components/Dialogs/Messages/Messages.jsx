import React from 'react';
import classes from './../Dialogs.module.css';



const Message = (props) => {
 
return <div>
        <div className={classes.myMessage}>{props.messageMy}</div>
        <div className={classes.friendMessage}>{props.messageFriend}</div>
        </div>
} 


export default Message;