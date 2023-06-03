import React from 'react';
import s from './SidebarStyle.module.css';
import { NavLink } from 'react-router-dom';

function Sidebar() {
    const setActive = ({isActive}) => isActive ? ' ' + s.active : '';
    return (
        <div className={s.sidebar_inner}>
            <nav className={s.menu}>
                <ul className={s.menu__list}>
                    <li className={s.menu__item}><NavLink to="/profile" className={({isActive}) => `${s.menu__link}${isActive ? ' ' + s.active : ""}`}>Профиль</NavLink></li>
                    <li className={s.menu__item}><NavLink to="dialogs" className={({isActive}) => `${s.menu__link}${isActive ? ' ' + s.active : ""}`}>Сообщения</NavLink></li>
                    <li className={s.menu__item}><NavLink to="/news" className={({isActive}) => `${s.menu__link}${isActive ? ' ' + s.active : ""}`}>Новости</NavLink></li>
                    <li className={s.menu__item}><NavLink to="/music" className={({isActive}) => `${s.menu__link}${isActive ? ' ' + s.active : ""}`}>Музыка</NavLink></li>
                    <li className={s.menu__item}><NavLink to="/settings" className={({isActive}) => `${s.menu__link}${isActive ? ' ' + s.active : ""}`}>Настройки</NavLink></li>
                </ul>
            </nav>
        </div>
    );
}

export default Sidebar;