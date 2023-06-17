import { combineReducers, configureStore } from "@reduxjs/toolkit";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let reducersPatch = combineReducers({
    profileReducer, 
    dialogsReducer, 
    sidebarReducer});

export let store = configureStore({
    reducer: {
        profilePage: profileReducer, 
        dialogsPage: dialogsReducer, 
        sidebar: sidebarReducer
    }
});

window.store = store;
