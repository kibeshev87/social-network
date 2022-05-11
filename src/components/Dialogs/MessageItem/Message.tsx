import React from 'react';
import style from './../Dialogs.module.css'
import {MessageType} from "../../../redux/state";

type MessagePropsType = MessageType
    //id: string
    //message: string


export const Message = (props: MessagePropsType) => {
    return (
        <div className={style.message} id={props.id}>{props.message}</div>
    )
}
