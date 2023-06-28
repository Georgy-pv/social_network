import React from 'react';
import { sendMessage, updateNewMessageChange } from '../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';


// function DialogsContainer() {
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     let state =store.getState().dialogsPage;
//                     let sendMessage = () => {
//                         let action = sendMessageActionCreator();
//                         store.dispatch(action);
//                     };

//                     let onMassageChange = (text) => {
//                         let action = updateNewMessageChangeActionCreator(text);
//                         store.dispatch(action);
//                     };

//                     return <Dialogs onMassageChange={onMassageChange} sendMessage={sendMessage} dialogsPage={state} />;
//                 }
//             }
//         </StoreContext.Consumer>
//     );
// }

function mapStateToProps(state) {
    return{
        dialogsPage: state.dialogsPage
    }
};
// function mapDispatchToProps(dispatch) {
//     return{
//         onMassageChange: (text) => {
//             dispatch(updateNewMessageChangeActionCreator(text))
//         },
//         sendMessage: () => {
//             dispatch(sendMessageActionCreator())
//         }
//     }
// }

const DialogsContainer = connect(mapStateToProps, {
    updateNewMessageChange,
    sendMessage
})(Dialogs)


export default DialogsContainer;