import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Messages/Messages';



const Dialogs = (props) => {

    let dialog = props.state.dialogItem.map(d => <DialogItem id = {d.id} name = {d.name} ava = {d.ava}/>);
    let message = props.state.messageItem.map(m =>  <Message messageMy = {m.messageMy} messageFriend = {m.messageFriend} />);

    let newTextElement = React.createRef();

    let addText = () => {
        let text = newTextElement.current.value;
        alert(text);
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
                    <div><textarea ref = {newTextElement}></textarea></div>
                    <div><button onClick = {addText}>Add text</button></div>  
                </div>
                </div>
}

export default Dialogs;