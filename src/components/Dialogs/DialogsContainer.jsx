import React from 'react';
import {addTextCreator, onChangeTextCreator} from '../../redux/DialogsReducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';


let mapStateToProps = (state) => {
    return {
    DialogsPage: state.DialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addText: () => {
            dispatch(addTextCreator());
        },
        onChangeText: (text) => {
            dispatch(onChangeTextCreator(text));
        }
    }
}

const DialogsContainer = connect (mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;