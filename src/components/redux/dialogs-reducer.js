const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_CHANGE = 'UPDATE-NEW-MESSAGE-CHANGE'
let initialState = {
    messagesData: [
        { id: 1, message: 'Сообщение 1', isYou: true },
        { id: 2, message: 'Сообщение 2', isYou: false },
        { id: 3, message: 'Сообщение 3', isYou: true },
        { id: 4, message: 'Сообщение 4', isYou: false },
        { id: 5, message: 'Сообщение 5', isYou: true }
    ],
    dialogsData: [
        { id: 1, name: 'Дмитрий' },
        { id: 2, name: 'Саша' },
        { id: 3, name: 'Валера' },
        { id: 4, name: 'Миша' },
        { id: 5, name: 'Даша' },
        { id: 6, name: 'Катя' },
        { id: 7, name: 'Света' }
    ],
    newMessageText: ''
};


const dialogsReducer = (state = initialState, action) => {

    switch (action.type){
        case SEND_MESSAGE:
            let newMessage = {
                id: state.messagesData[state.messagesData.length - 1].id + 1,
                message: state.newMessageText,
                isYou: true
            };
            return {
                ...state,
                messagesData: [
                    ...state.messagesData,
                    newMessage
                ],
                newMessageText: ''
            }
        case UPDATE_NEW_MESSAGE_CHANGE: 
            let message = action.messageText;
            return {
                ...state,
                newMessageText: message
            }
        default:
            return state
    }
};

export const sendMessage = () => ({type: SEND_MESSAGE});
export const updateNewMessageChange = (messageText) => ({
    type: UPDATE_NEW_MESSAGE_CHANGE,
    messageText: messageText
});

export default dialogsReducer;