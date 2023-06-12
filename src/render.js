import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { addMessage, addPost, updateNewMessageChange, updateNewPostChange } from './components/redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerenderEntireTree = (state) =>{
    root.render(
        <React.StrictMode>
          <App updateNewMessageChange={updateNewMessageChange} updateNewPostChange={updateNewPostChange} addMessage={addMessage} state={state} addPost={addPost}/>
        </React.StrictMode>
      );
      
};