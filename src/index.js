import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

let data = {
    postsData: [
    {id: 1,post: 'Мой первый пост!', likesCount: 12}, 
    {id: 2,post: 'Это пропс!', likesCount: 15}, 
    {id: 4,post: 'Hey', likesCount: 24},
    {id: 5,post: 'Post 4', likesCount: 52},
    {id: 6,post: 'Post 5', likesCount: 45},
    {id: 7,post: 'Post 6', likesCount: 64}
    ],
    dialogsData: [
    {id: 1,name: 'Дмитрий'}, 
    {id: 2,name: 'Саша'}, 
    {id: 3,name: 'Валера'}, 
    {id: 4,name: 'Миша'}, 
    {id: 5,name: 'Даша'},
    {id: 6,name: 'Катя'},
    {id: 7,name: 'Света'}
    ],
    messagesData: [
    {id: 1,message: 'Сообщение 1'}, 
    {id: 2,message: 'Сообщение 2'}, 
    {id: 3,message: 'Сообщение 3'}, 
    {id: 4,message: 'Сообщение 4'}, 
    {id: 5,message: 'Сообщение 5'} 
    ]
};
root.render(
  <React.StrictMode>
    <App data={data}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
