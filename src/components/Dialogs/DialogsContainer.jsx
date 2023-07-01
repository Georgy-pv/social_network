import React from 'react';
import { sendMessage, updateNewMessageChange } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';


function mapStateToProps(state) {
    return{
        dialogsPage: state.dialogsPage
    }
};


const DialogsContainer = connect(mapStateToProps, {
    updateNewMessageChange,
    sendMessage
})(Dialogs)


export default DialogsContainer;