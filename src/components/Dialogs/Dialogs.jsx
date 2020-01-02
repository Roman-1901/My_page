import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Messages/Messages';


const Dialogs = (props) => {

    let state = props.DialogsPage;

    let dialog = state.dialogItem.map(d => <DialogItem id = {d.id} name = {d.name} ava = {d.ava}/>);
    let message = state.messageItem.map(m =>  <Message messageMy = {m.messageMy} messageFriend = {m.messageFriend} />);

   

    let addText = () => {
        props.addText();
    }

    let onChangeText = (e) => {
        let text = e.target.value;
        props.onChangeText(text);
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
                    <div><textarea onChange = {onChangeText} value = {state.newMessageText}/></div>
                    <div><button onClick = {addText}>Add text</button></div>  
                </div>
                </div>
}

export default Dialogs;