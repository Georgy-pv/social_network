import React from 'react';
import { sendMessageActionCreator, updateNewMessageChangeActionCreator } from '../redux/dialogs-reducer';
import Dialogs from './Dialogs';




function DialogsContainer(props) {
    let state = props.store.getState().dialogsPage;
    let sendMessage = () => {
        let action = sendMessageActionCreator();
        props.store.dispatch(action);
    };

    let onMassageChange = (text) => {
        let action = updateNewMessageChangeActionCreator(text);
        props.store.dispatch(action);
    };

    return <Dialogs onMassageChange={onMassageChange} sendMessage={sendMessage} dialogsPage={state} />; 
}

export default DialogsContainer;