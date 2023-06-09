import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


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
    dispatch(action){
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callsubscriber(this._state);
    }
};

window.store = store;
