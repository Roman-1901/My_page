import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Messages/Messages';



const Dialogs = (props) => {


    
    let dialog = props.state.dialogItem.map(d => <DialogItem id = {d.id} name = {d.name}/>);
    let message = props.state.messageItem.map(m =>  <Message message = {m.message} />);

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