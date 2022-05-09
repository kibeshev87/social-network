import React from 'react';
import style from './../Dialogs.module.css'
import {Link} from "react-router-dom";
import {DialogType} from "../../../redux/state";

// type DialogPropsType = {
//     id: string
//     name: string
// }

export const DialogItem: React.FC<DialogType> = (props) => {
    return (
        <nav className={`${style.dialog} ${style.active}`}>
            <Link to={'/dialogs/' + props.id}>{props.name}</Link>
        </nav>
    )
}


