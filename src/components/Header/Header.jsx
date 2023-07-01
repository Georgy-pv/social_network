import React from 'react';
import s from './HeaderStyle.module.css';
import logo from '../../img/Frame 1.png'
import { NavLink } from 'react-router-dom/cjs/react-router-dom';


function Header(props) {
    return (
        <section className={s.header}>
            <img src={logo} className={s.logo} alt="Логотип" />
            <div className={s.login}>
                {props.isAuth 
                ? props.login 
                : <NavLink to={'/login'}>Логин</NavLink>}
                
            </div>
        </section>
    );
}

export default Header;