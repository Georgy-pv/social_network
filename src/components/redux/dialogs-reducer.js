const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_CHANGE = 'UPDATE-NEW-MESSAGE-CHANGE'

const dialogsReducer = (state, action) => {
    switch (action.type){
        case ADD_MESSAGE:
            let newMessage = {
                id: state.messagesData[state.messagesData.length - 1].id + 1,
                message: state.newMessageText,
                isYou: true
            };
            state.messagesData.push(newMessage);
            state.newMessageText = '';
            return state
        case UPDATE_NEW_MESSAGE_CHANGE:
            state.newMessageText = action.messageText;
            return state
        default:
            return state
    }
};

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateNewMessageChangeActionCreator = (messageText) => ({
    type: UPDATE_NEW_MESSAGE_CHANGE,
    messageText: messageText
});

export default dialogsReducer;