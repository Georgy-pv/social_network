import React from 'react';
import s from './ProfileStyle.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';


function Profile(props) {
    return (
        <div className="main">
            <ProfileInfo />
            <MyPosts postsData={props.postsData} />
        </div>
            
    );
}

function ProfileWrapper(props){
    return <Profile posts={props.postsData} />
}

export default Profile;