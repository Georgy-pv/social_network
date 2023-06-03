import React from 'react';
import s from './HeaderStyle.module.css';
import logo from '../../img/Frame 1.png'


function Header() {
    return (
        <section className={s.header}>
            <img src={logo} className={s.logo} alt="Логотип" />
        </section>
    );
}

export default Header;