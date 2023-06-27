import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";

export let store = configureStore({
    reducer: {
        profilePage: profileReducer, 
        dialogsPage: dialogsReducer, 
        sidebar: sidebarReducer,
        usersPage: usersReducer
    }
});

window.store = store;
