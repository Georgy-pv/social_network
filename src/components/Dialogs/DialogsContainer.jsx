import React from 'react';
import { sendMessageActionCreator, updateNewMessageChangeActionCreator } from '../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import StoreContext from '../../context';




function DialogsContainer() {

    


    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state =store.getState().dialogsPage;
                    let sendMessage = () => {
                        let action = sendMessageActionCreator();
                        store.dispatch(action);
                    };

                    let onMassageChange = (text) => {
                        let action = updateNewMessageChangeActionCreator(text);
                        store.dispatch(action);
                    };

                    return <Dialogs onMassageChange={onMassageChange} sendMessage={sendMessage} dialogsPage={state} />;
                }
            }
        </StoreContext.Consumer>
    );
}

export default DialogsContainer;