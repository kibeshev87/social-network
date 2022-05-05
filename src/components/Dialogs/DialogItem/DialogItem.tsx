import React from 'react';
import style from './../Dialogs.module.css'
import {Link} from "react-router-dom";

type DialogPropsType = {
    id: string
    name: string
}

export const DialogItem: React.FC<DialogPropsType> = (props) => {
    return (
        <nav className={`${style.dialog} ${style.active}`}>
            <Link to={'/dialogs/' + props.id}>{props.name}</Link>
        </nav>
    )
}


