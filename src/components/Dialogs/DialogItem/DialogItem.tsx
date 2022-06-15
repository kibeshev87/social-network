import React from 'react';
import style from './../Dialogs.module.css'
import {Link} from "react-router-dom";
import {DialogType} from "../../../redux/dialogsReducer";

type DialogPropsType = DialogType
     //id: string
     //name: string


export const DialogItem = (props: DialogPropsType) => {
    return (
        <nav className={`${style.dialog} ${style.active}`}>
            <Link to={'/dialogs/' + props.id}>{props.name}</Link>
        </nav>
    )
}


