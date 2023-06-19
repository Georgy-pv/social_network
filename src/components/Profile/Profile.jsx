import React from 'react';
import s from './ProfileStyle.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';


function Profile(props) {
    return (
        <div className="main">
            <ProfileInfo />
            <MyPostsContainer />
        </div>
            
    );
}


export default Profile;