import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-redicer";
import thunkMiddleware from 'redux-thunk';

export let store = configureStore({
    reducer: {
        profilePage: profileReducer, 
        dialogsPage: dialogsReducer, 
        sidebar: sidebarReducer,
        usersPage: usersReducer,
        auth: authReducer
    }
}, applyMiddleware(thunkMiddleware));

window.store = store;
