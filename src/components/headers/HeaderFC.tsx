import React from 'react';
import style from './Header.module.css'
import headerLogo from '../../accets/images/home-page-logotip.png'
import {NavLink} from 'react-router-dom';

export const HeaderFC = () => {
    return (
        <header className={style.header}>
            <img src={headerLogo}/>
            <div className={style.loginBlock}>
                <NavLink to={'/login'}>Login</NavLink>
            </div>
        </header>
    )
}

