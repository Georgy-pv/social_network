import React from 'react';
import { addPostActionCreator, updateNewPostChangeActionCreator } from '../../redux/profile-reducer';
import MyPosts from './MyPosts';


function MyPostsContainer(props) {
    let postsData = props.store.getState().profilePage.postsData;
    let newPostText = props.store.getState().profilePage.newPostText;

    let addPost = () => {
        let action = addPostActionCreator();
        props.store.dispatch(action);
    };

    let onPostChange = (text) => {
        let action = updateNewPostChangeActionCreator(text);
        props.store.dispatch(action);

    };
    return <MyPosts onPostChange={onPostChange} addPost={addPost} newPostText={newPostText} postsData={postsData} />
}

export default MyPostsContainer;