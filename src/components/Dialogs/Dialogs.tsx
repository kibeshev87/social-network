import React from 'react';
import style from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./MessageItem/Message";
import {v1} from "uuid";

/*
export type DialogsPropsType = {
    id: string
    name: string
    message: string
}
*/

export const Dialogs = () => {

/*
    let dialogs = [
        {id: v1(), name: 'Dmitry'},
        {id: v1(), name: 'Yulia'},
        {id: v1(), name: 'Aleksandr'},
        {id: v1(), name: 'Evgeniy'},
        {id: v1(), name: 'Nikolay'},
        {id: v1(), name: 'Victor'}
    ]
*/

    let dialogsElements = dialogs
        .map(dialog => <DialogItem key={dialog.id}  id={dialog.id} name={dialog.name}/>)

    let messages = [
        {id: v1(), message: 'Hi'},
        {id: v1(), message: 'How is your it-kamasutra?'},
        {id: v1(), message: 'Yo-Yo'}
    ]

    let messagesElements = messages
        .map(message => <Message key={message.id} id={message.id} message={message.message}/>)

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={style.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

