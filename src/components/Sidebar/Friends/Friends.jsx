import React from 'react';
import s from './Friends.module.css';
import Friend from './Friend/Friend';

function Friends(props) {
    let friendsList = props.friends.map(f => <Friend key={f.id} id={f.id} name={f.name} surname={f.surname} avatar={f.avatar} />)
    return (
        <div className={s.friends}>
            {friendsList}
        </div>
    );
}

export default Friends;