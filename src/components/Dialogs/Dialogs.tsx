import React from 'react';
import style from './Dialogs.module.css'
import {Link} from "react-router-dom";

type DialogPropsType = {
    name: string
    id: string
}

type MessagePropsType = {
    message: string
}

const DialogItem = (props: DialogPropsType) => {
    return (
        <nav className={`${style.dialog} ${style.active}`}>
            <Link to={'/dialogs/' + props.id}>{props.name}</Link>
        </nav>
    )
}

const Message = (props:MessagePropsType) => {
    return (
        <div className={style.message}>{props.message}</div>
    )
}

const Dialogs = () => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <DialogItem id='1' name='Dmitry'/>
                <DialogItem id='2' name='Yulia'/>
                <DialogItem id='3' name='Aleksandr'/>
                <DialogItem id='4' name='Evgeniy'/>
                <DialogItem id='5' name='Nikolay'/>
                <DialogItem id='6' name='Victor'/>
            </div>
            <div className={style.messages}>
                <Message message='Hi'/>
                <Message message='How is your it-kamasutra?'/>
                <Message message='Yo'/>
            </div>
        </div>
    )
}

export default Dialogs;