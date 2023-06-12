import React from 'react';
import s from './ProfileStyle.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';


function Profile(props) {
    return (
        <div className="main">
            <ProfileInfo />
            <MyPosts updateNewPostChange={props.updateNewPostChange} newPostText={props.profilePage.newPostText} addPost={props.addPost} postsData={props.profilePage.postsData} />
        </div>
            
    );
}

function ProfileWrapper(props){
    return <Profile posts={props.postsData} />
}

export default Profile;