import React from 'react';
import s from '../Dialogs.module.css'
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    let path = `/dialogs/${props.id}`

    return (
        <NavLink className={s.dialogs__item} to={path}>{props.name}</NavLink>
    );
}

export default DialogItem;