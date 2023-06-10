import React from 'react';
import s from '../Friends.module.css'

function Friend(props) {
    return (
        <div className={s.friends__item}>
            <div className={s.friends__avatar}>
                <img className={s.friends__img} src={props.avatar} alt="" />
            </div>
            <div className={s.friends__text}>
                <span className={s.friends__name}>{props.name}</span>
                <span className={s.friends__surname}> {props.surname}</span>
            </div>
        </div>
    );
}

export default Friend;