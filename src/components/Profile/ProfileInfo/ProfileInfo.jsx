import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from '../../common/Preloader/Preloader';


function ProfileInfo(props) {

    if (!props.profile) {
        return <Preloader />
    };


    let contacts = [];
    for (let k in props.profile.contacts) {
        if (props.profile.contacts[k]) {
            contacts.push(<li>{k} <a href={props.profile.contacts[k]}>{k}</a></li>)
        }
    };

    return (
        <div className={s.profile__wrapper}>
            <div className={s.profile__background}></div>
            <div className={s.profile__inner}>
                <div className={s.profile__card}>
                    <div className={s.profile__avatar}>
                        <img className={s.avatar} src={props.profile.photos.large
                            ? props.profile.photos.large : 'https://www.norbel.ru/assets/images/no_ava.png'} alt="" />
                    </div>
                    <div className={s.profile__info}>
                        <div className={s.name}>{props.profile.fullName}</div>
                        <div className={s.about}>
                            Обо мне: {props.profile.aboutMe}
                        </div>
                        <ul className={s.contacts}>
                            Мои контакты:
                            {contacts}
                        </ul>
                        <div className={s.job}>
                            Ищу работу: {props.profile.lookingForAJob ? 'Да' : 'Нет'}
                            {props.profile.lookingForAJob 
                            ? <div className={s.job__description}>Описание к поиску работы: props.profile.lookingForAJob </div>
                            : ''}
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;