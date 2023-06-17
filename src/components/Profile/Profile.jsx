import React from 'react';
import s from './ProfileStyle.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';


function Profile(props) {
    return (
        <div className="main">
            <ProfileInfo />
            <MyPostsContainer store={props.store} />
        </div>
            
    );
}

function ProfileWrapper(props){
    return <Profile posts={props.postsData} />
}

export default Profile;