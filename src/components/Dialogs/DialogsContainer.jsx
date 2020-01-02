import React from 'react';
import {addTextCreator, onChangeTextCreator} from '../../redux/DialogsReducer';
import Dialogs from './Dialogs';


const DialogsContainer = (props) => {

    let state = props.store.getState().DialogsPage;
   

    let addText = () => {
        props.store.dispatch(addTextCreator());
    }

    let onChangeText = (text) => {
        props.store.dispatch(onChangeTextCreator(text));
    }

        return <Dialogs addText = {addText} onChangeText = {onChangeText}
        DialogsPage = {state}/>
}

export default DialogsContainer;