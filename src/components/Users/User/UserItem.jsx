import React from 'react';
import s from './../Users.module.css'
import { NavLink } from 'react-router-dom';


function UserItem(props) {
    return (
        <div className={s.users__item}>

            <div className={s.users__avatar}>
                <NavLink to={`/profile/${props.userId}`}>
                    <img className={s.users__img} src={props.avatar
                        ? props.avatar
                        : 'https://www.norbel.ru/assets/images/no_ava.png'} alt={props.fullName} />
                </NavLink>
                <div className={s.users__following}>
                    {props.followed
                        ? <button onClick={() => { props.unfollowing(props.userId) }} className={s.users__btn}>FOLLOW</button>
                        : <button onClick={() => { props.following(props.userId) }} className={s.users__btn}>UNFOLLOW</button>}
                </div>
            </div>

            <div className={s.users__info}>
                <div className="">
                    <div className={s.users__name}>
                        {props.fullName}
                    </div>
                    <div className={s.users__status}>
                        {props.userStatus}
                    </div>
                </div>

                <div className={s.users__location}>
                    'props.country, props.city'
                </div>
            </div>
        </div>

    );
}

export default UserItem;