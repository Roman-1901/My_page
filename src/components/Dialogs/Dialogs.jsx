import React from 'react';
import classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';


const DialogItem = (props) => {
        return  <div className={classes.dialog}>
                    <NavLink to={"/messages/" + props.id} activeClassName={classes.active} >
                        {props.name}
                    </NavLink>
                </div>
}

const Message = (props) => {
return <div className={classes.message}>{props.message}</div>
}

let dialogItem = [
    {id: 1, name: "Jenya"},
    {id: 2, name: "Anton"},
    {id: 3, name: "Dima"},
    {id: 4, name: "Lecha"},
] 

let messageItem = [
    {id: 1, message: "Hi"},
    {id: 2, message: "Huy sosi"},
    {id: 3, message: "Guboy tryasi"},
]

let dialog = dialogItem.map(d => <DialogItem id = {d.id} name = {d.name}/>);
let message = messageItem.map(m =>  <Message message = {m.message} />);

const Dialogs = () => {
        return <div className={classes.dialogs}>
                    <div className={classes.dialogsItems}>
                        {dialog}
                    </div>
                    <div className={classes.messages}>
                        {message}
                    </div>
                </div>
}

export default Dialogs;