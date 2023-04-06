import React from 'react';
import {NavLink} from 'react-router-dom';
import style from './NavBar.module.css'

export const NavBar = () => {
    return (
        <nav className={style.nav}>
            <div className={style.item}>
                <NavLink to={'/profile'} activeClassName={style.active}>Profile</NavLink>
            </div>

            <div className={style.item}>
                <NavLink to={'/dialogs'} activeClassName={style.active}>Messages</NavLink>
            </div>

            <div className={style.item}>
                <NavLink to={'/users'} activeClassName={style.active}>Users</NavLink>
            </div>

            <div className={style.item}>
                <NavLink to={'/news'} activeClassName={style.active}>News</NavLink>
            </div>

            <div className={style.item}>
                <NavLink to={'/music'} activeClassName={style.active}>Music</NavLink>
            </div>
        </nav>
    );
};

