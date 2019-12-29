import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Messages/Messages';
import {addTextCreator, onChangeTextCreator} from '../../redux/state';


const Dialogs = (props) => {

    let dialog = props.DialogsPage.dialogItem.map(d => <DialogItem id = {d.id} name = {d.name} ava = {d.ava}/>);
    let message = props.DialogsPage.messageItem.map(m =>  <Message messageMy = {m.messageMy} messageFriend = {m.messageFriend} />);

   

    let addText = () => {
        props.dispatch(addTextCreator());
    }

    let onChangeText = (e) => {
        let text = e.target.value;
        props.dispatch(onChangeTextCreator(text));
    }

        return <div>
                <div className={classes.dialogs}>
                    <div className={classes.dialogsItems}>
                        {dialog}
                    </div>
                    <div className={classes.messages}>
                        {message}
                    </div>
                </div>
                <div className={classes.addText}>
                    <div><textarea onChange = {onChangeText} value = {props.DialogsPage.newMessageText}/></div>
                    <div><button onClick = {addText}>Add text</button></div>  
                </div>
                </div>
}

export default Dialogs;