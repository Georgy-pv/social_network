const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_CHANGE = 'UPDATE-NEW-POST-CHANGE'
const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_CHANGE = 'UPDATE-NEW-MESSAGE-CHANGE'

export let store = {
    _state: {
        profilePage: {
            postsData: [
                { id: 1, post: 'Мой первый пост!', likesCount: 12 },
                { id: 2, post: 'Это пропс!', likesCount: 15 },
                { id: 4, post: 'Hey', likesCount: 24 },
                { id: 5, post: 'Post 4', likesCount: 52 },
                { id: 6, post: 'Post 5', likesCount: 45 },
                { id: 7, post: 'Post 6', likesCount: 64 }
            ],
            newPostText: ''
        },
        dialogsPage: {
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
        },
        sidebar:{
            friends:[
                {id: 1, name: 'Дмитрий', surname: 'Попов', avatar: 'https://bipbap.ru/wp-content/uploads/2022/11/1652235714_41-kartinkin-net-p-prikolnie-kartinki-dlya-stima-44.jpg'},
                {id: 2, name: 'Алексей', surname: 'Смирнов', avatar: 'https://cs14.pikabu.ru/post_img/big/2023/02/13/8/1676295972133291028.png'},
                {id: 3, name: 'Валерий', surname: 'Петров', avatar: 'https://kartinkived.ru/wp-content/uploads/2021/12/avatarka-dlya-vatsapa-krasivaya-panda.jpg'},
            ]
        }
    },
    getState(){
        return this._state
    },
    _callsubscriber(){
        console.log('State changed')
    },
    subscribe(observer){
        this._callsubscriber = observer;
    },
    _addPost(){
        let newPost = {
            id: this._state.profilePage.postsData[this._state.profilePage.postsData.length - 1].id + 1,
            post: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.postsData.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callsubscriber(this._state);
    },
    _updateNewPostChange(text){
        this._state.profilePage.newPostText = text;
        this._callsubscriber(this._state);
    },
    _addMessage () {
        let newMessage = {
            id: this._state.dialogsPage.messagesData[this._state.dialogsPage.messagesData.length - 1].id + 1,
            message: this._state.dialogsPage.newMessageText,
            isYou: true
        };
        this._state.dialogsPage.messagesData.push(newMessage);
        this._state.dialogsPage.newMessageText = ''
        this._callsubscriber(this._state);
    },
    _updateNewMessageChange(text){
        this._state.dialogsPage.newMessageText = text;
        this._callsubscriber(this._state);
    },
    dispatch(action){
        if (action.type === ADD_POST){
            this._addPost()
        }else if (action.type === UPDATE_NEW_POST_CHANGE){
            this._updateNewPostChange(action.postText)
        }else if (action.type === ADD_MESSAGE){
            this._addMessage()
        }else if (action.type === UPDATE_NEW_MESSAGE_CHANGE){
            this._updateNewMessageChange(action.messageText)
        };
    }
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostChangeActionCreator = (postText) => ({
    type: UPDATE_NEW_POST_CHANGE,
    postText: postText
});
export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateNewMessageChangeActionCreator = (messageText) => ({
    type: UPDATE_NEW_MESSAGE_CHANGE,
    messageText: messageText
});

window.store = store;
