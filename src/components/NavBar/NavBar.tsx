import React from 'react';
import style from './NavBar.module.css'
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className={style.nav}>

            <div className={`${style.item} ${style.active}`}>
                <Link  to='/profile' > Profile </Link>
            </div>

            <div className={style.item}>
                <Link to='/dialogs'> Message </Link>
            </div>

            <div className={style.item}>
                <Link to='/news'>News</Link>
            </div>

            <div className={style.item}>
                <Link to='/music'>Music</Link>
            </div>

            <div className={style.item}>
                <Link to='/settings'>Settings</Link>
            </div>

        </nav>
    )
};

export default NavBar;